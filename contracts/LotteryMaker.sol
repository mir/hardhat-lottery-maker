//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";


contract LotteryMaker is Ownable, VRFConsumerBaseV2 {
    using Counters for Counters.Counter;
    enum LotteryState { Open, Stopped, Calculating, MoneyTransfered }

    uint public creatorFee;
    mapping(address => uint) public ownerLotteryIDMapping;
    mapping(uint => uint) public lotteryIDFeeMapping;
    mapping(uint => uint) public lotteryIDDurationMapping;
    mapping(uint => LotteryState) public lotteryIDStateMapping;
    mapping(uint => uint) public lotteryIDBalanceMapping;
    mapping(uint => uint) public requestIDLotteryIDMapping;
    mapping(uint => address payable[]) public lotteryIDEntrancesMapping;
    Counters.Counter private lotteryIDCounter;

    // Random number params
    VRFCoordinatorV2Interface COORDINATOR;

    // Your subscription ID.
    uint64 s_subscriptionId = 2671;
    // Rinkeby coordinator. For other networks,
    // see https://docs.chain.link/docs/vrf-contracts/#configurations
    address vrfCoordinator = 0x6168499c0cFfCaCD319c818142124B7A15E857ab;

    // The gas lane to use, which specifies the maximum gas price to bump to.
    // For a list of available gas lanes on each network,
    // see https://docs.chain.link/docs/vrf-contracts/#configurations
    bytes32 keyHash = 0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc;

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

    constructor(uint _creatorFee) VRFConsumerBaseV2(vrfCoordinator){
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
        console.log("Deploying a ContractMaker with minimum fee:", _creatorFee);
        creatorFee = _creatorFee;
    }

    function changeCreatorFee(uint _newFee) public onlyOwner {
        console.log("Change fee to new value:", _newFee);
        creatorFee = _newFee;
    }

    function createLottery(uint entranceFee)
        external payable 
    {
        require(msg.value >= creatorFee, "Not enough ETH to create a lottery");
        console.log("Create a lottery with fee: ", entranceFee);
        lotteryIDCounter.increment();
        uint lotteryID = lotteryIDCounter.current();        
        console.log("LotteryID: ", lotteryID);
        ownerLotteryIDMapping[msg.sender] = lotteryID;
        lotteryIDFeeMapping[lotteryID] = entranceFee;
        lotteryIDStateMapping[lotteryID] = LotteryState.Open;
        lotteryIDBalanceMapping[lotteryID] = 0;
    }

    function enterLottery(uint lotteryID) external payable {        
        console.log("Somebody tryed to enter the lottery: ", lotteryID);
        require(lotteryIDStateMapping[lotteryID] == LotteryState.Open, "Sorry, lottery is not open");
        require(msg.value >= lotteryIDFeeMapping[lotteryID], "Not enough ETH to enter the lottery");
        console.log("Somebody entered the lottery and payed ", msg.value);
        lotteryIDBalanceMapping[lotteryID] = lotteryIDBalanceMapping[lotteryID] + msg.value;
        lotteryIDEntrancesMapping[lotteryID].push(payable(msg.sender));
    }

    function stopEntrance(uint lotteryID) external {
        console.log("Stopping entrance. LotteryID :", lotteryID);
        console.log("msg.sender:", msg.sender);
        console.log("ownerLotteryIDMapping[msg.sender]:", ownerLotteryIDMapping[msg.sender]);
        require(ownerLotteryIDMapping[msg.sender] == lotteryID, "Only creator of the Lottery can stop entrance");
        require(lotteryIDStateMapping[lotteryID] == LotteryState.Open, "Sorry, lottery is not open");
        lotteryIDStateMapping[lotteryID] = LotteryState.Stopped;
        console.log("Lottery stopped ", lotteryID);
    }

    function calculateWinner(uint lotteryID) external {
        require(ownerLotteryIDMapping[msg.sender] == lotteryID, "Only creator of the Lottery can calculate winners");
        require(lotteryIDStateMapping[lotteryID] == LotteryState.Stopped, "Sorry, lottery is not stopped");
        require(lotteryIDEntrancesMapping[lotteryID].length > 0, "No entrances");
        console.log("Random number requested, lotteryID:", lotteryID);
        lotteryIDStateMapping[lotteryID] = LotteryState.Calculating;
        uint s_requestId = COORDINATOR.requestRandomWords(
            keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            numWords
        );
        requestIDLotteryIDMapping[s_requestId] = lotteryID;
        console.log("Random number requested, requestID: ", s_requestId);
    }

    function fulfillRandomWords(
        uint256 requestID, /* requestId */
        uint256[] memory randomWords
    ) internal override {
        console.log("Got a random number: ", requestID);
        uint lotteryID = requestIDLotteryIDMapping[requestID];
        console.log("Convertef requestID to lotteryID: ", lotteryID);
        address payable[] memory entrances = lotteryIDEntrancesMapping[lotteryID];
        uint winnerNumber = randomWords[0] % entrances.length;
        console.log("Calculated winner number: ", winnerNumber);
        winnerCalculated(lotteryID, entrances[winnerNumber]);
    }

    function winnerCalculated(uint lotteryID, address payable winnerAddress) internal {        
        console.log("Calculated winner address: ", winnerAddress);
        require(lotteryIDStateMapping[lotteryID] == LotteryState.Calculating, "Sorry, lottery is not in Calculating state");
        lotteryIDStateMapping[lotteryID] = LotteryState.MoneyTransfered;
        winnerAddress.transfer(lotteryIDBalanceMapping[lotteryID]);
        console.log("Money transfered: ", winnerAddress);
        delete lotteryIDEntrancesMapping[lotteryID];
    }
}
