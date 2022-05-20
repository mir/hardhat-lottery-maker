// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "@chainlink/contracts/src/v0.8/KeeperCompatible.sol";

contract LotteryMaker is Ownable, VRFConsumerBaseV2, KeeperCompatibleInterface {
    using Counters for Counters.Counter;
    enum LotteryState { Open, Stopped, Calculating, MoneyTransfered }
    event LotteryCreatedEvent(address indexed owner, uint indexed lotteryID);
    event WinnerCalculatedEvent(address indexed winner, uint indexed lotteryID);

    uint public creatorFee;    
    mapping(uint => address) public lotteryIDOwnerMapping;
    mapping(uint => uint) public lotteryIDFeeMapping;
    mapping(uint => uint) public lotteryIDEndtimeMapping;
    uint[] public lotteryIDToCheckDuration;
    mapping(uint => LotteryState) public lotteryIDStateMapping;
    mapping(uint => uint) public lotteryIDBalanceMapping;
    mapping(uint => uint) public requestIDLotteryIDMapping;
    mapping(uint => address payable[]) public lotteryIDEntrancesMapping;
    Counters.Counter private lotteryIDCounter;

    // Random number params
    VRFCoordinatorV2Interface COORDINATOR;

    // Your subscription ID.
    uint64 s_subscriptionId;    

    // The gas lane to use, which specifies the maximum gas price to bump to.
    // For a list of available gas lanes on each network,
    // see https://docs.chain.link/docs/vrf-contracts/#configurations
    bytes32 keyHash;

    // Depends on the number of requested values that you want sent to the
    // fulfillRandomWords() function. Storing each word costs about 20,000 gas,
    // so 100,000 is a safe default for this example contract. Test and adjust
    // this limit based on the network that you select, the size of the request,
    // and the processing of the callback request in the fulfillRandomWords()
    // function.
    uint32 callbackGasLimit = 100000;    
    uint16 requestConfirmations = 3;
    // For this example, retrieve 2 random values in one request.
    // Cannot exceed VRFCoordinatorV2.MAX_NUM_WORDS.
    uint32 numWords = 1;

    constructor(
        uint _creatorFee,
        address _vrfCoordinator,
        uint64 _subscriptionId,
        bytes32 _keyHash)
            VRFConsumerBaseV2(_vrfCoordinator)
    {
        COORDINATOR = VRFCoordinatorV2Interface(_vrfCoordinator);
        creatorFee = _creatorFee;
        s_subscriptionId = _subscriptionId;
        keyHash = _keyHash;
    }

    function changeCreatorFee(uint _newFee) public onlyOwner {
        creatorFee = _newFee;
    }

    function createLotteryInternal(uint entranceFee)
        internal returns(uint)
    {
        lotteryIDCounter.increment();
        uint lotteryID = lotteryIDCounter.current();        
        lotteryIDFeeMapping[lotteryID] = entranceFee;
        lotteryIDStateMapping[lotteryID] = LotteryState.Open;
        lotteryIDBalanceMapping[lotteryID] = 0;
        lotteryIDOwnerMapping[lotteryID] = msg.sender;
        emit LotteryCreatedEvent(msg.sender, lotteryID);
        return lotteryID;
    }

    function createLottery(uint entranceFee)
        external payable 
    {
        require(msg.value >= creatorFee, "Not enough ETH to create a lottery");
        createLotteryInternal(entranceFee);
    }

    /* 
        entranceFee in Wei
        duration in seconds
    */
    function createLimitedLottery(uint entranceFee, uint duration)
        external payable 
    {
        require(msg.value >= creatorFee, "Not enough ETH to create a lottery");        
        uint lotteryID = createLotteryInternal(entranceFee);
        lotteryIDEndtimeMapping[lotteryID] = block.timestamp + duration;
        lotteryIDToCheckDuration.push(lotteryID);
    }

    function enterLottery(uint lotteryID) external payable {
        require(lotteryIDStateMapping[lotteryID] == LotteryState.Open, "Sorry, lottery is not open");
        require(msg.value >= lotteryIDFeeMapping[lotteryID], "Not enough ETH to enter the lottery");
        lotteryIDBalanceMapping[lotteryID] = lotteryIDBalanceMapping[lotteryID] + msg.value;
        lotteryIDEntrancesMapping[lotteryID].push(payable(msg.sender));
    }

    function stopEntrance(uint lotteryID) external {
        require(msg.sender == lotteryIDOwnerMapping[lotteryID], "Only creator of the lottery can stop the entrances");
        require(lotteryIDStateMapping[lotteryID] == LotteryState.Open, "Sorry, lottery is not open");
        lotteryIDStateMapping[lotteryID] = LotteryState.Stopped;
    }

    function calculateWinner(uint lotteryID) external {
        require(msg.sender == lotteryIDOwnerMapping[lotteryID], "Only creator of the Lottery can calculate winners");
        require(lotteryIDStateMapping[lotteryID] == LotteryState.Stopped, "Sorry, lottery is not stopped");
        require(lotteryIDEntrancesMapping[lotteryID].length > 0, "No entrances");
        lotteryIDStateMapping[lotteryID] = LotteryState.Calculating;
        uint s_requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
        requestIDLotteryIDMapping[s_requestId] = lotteryID;
    }

    function fulfillRandomWords(
        uint256 requestID, /* requestId */
        uint256[] memory randomWords
    ) internal override {
        uint lotteryID = requestIDLotteryIDMapping[requestID];
        address payable[] memory entrances = lotteryIDEntrancesMapping[lotteryID];
        uint winnerNumber = randomWords[0] % entrances.length;
        winnerCalculated(lotteryID, entrances[winnerNumber]);
    }

    function winnerCalculated(uint lotteryID, address payable winnerAddress) internal {        
        require(lotteryIDStateMapping[lotteryID] == LotteryState.Calculating, "Sorry, lottery is not in Calculating state");
        lotteryIDStateMapping[lotteryID] = LotteryState.MoneyTransfered;
        uint toTransfer = lotteryIDBalanceMapping[lotteryID];
        lotteryIDBalanceMapping[lotteryID] = 0;
        winnerAddress.transfer(toTransfer);
        delete lotteryIDEntrancesMapping[lotteryID];
        emit WinnerCalculatedEvent(winnerAddress, lotteryID);
    }

    function checkUpkeep(bytes calldata)
     external view override 
     returns (bool upkeepNeeded, bytes memory) 
    {
        upkeepNeeded = false;        
        uint arrayLength = lotteryIDToCheckDuration.length;// totalValue auto init to 0        
        for (uint i=0; i < arrayLength; i++) {
            uint lotteryID = lotteryIDToCheckDuration[i];
            upkeepNeeded = upkeepNeeded || 
                (lotteryIDEntrancesMapping[lotteryID].length > 0
                &&
                lotteryIDEndtimeMapping[lotteryID] < block.timestamp
                &&
                lotteryIDStateMapping[lotteryID] == LotteryState.Open);
            if (upkeepNeeded) {
                return (true, "");
            }
        }
    }

    function performUpkeep(bytes calldata /* performData */) external override {
        //We highly recommend revalidating the upkeep in the performUpkeep function
        uint arrayLength = lotteryIDToCheckDuration.length;// totalValue auto init to 0        
        for (uint i=0; i < arrayLength; i++) {
            uint lotteryID = lotteryIDToCheckDuration[i];
            if (lotteryIDEntrancesMapping[lotteryID].length > 0
                &&
                lotteryIDEndtimeMapping[lotteryID] < block.timestamp
                &&
                lotteryIDStateMapping[lotteryID] == LotteryState.Open) {
                lotteryIDStateMapping[lotteryID] = LotteryState.Stopped;
            }
        }
    }
}
