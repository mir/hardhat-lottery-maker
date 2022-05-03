//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

using Counters for Counters.Counter;

contract LotteryMaker is Ownable {
    enum LotteryState { Open, Stopped, MoneyTransfered };

    uint public creatorFee;
    mapping(address => uint) public ownerLotteryIDMapping;
    mapping(uint => uint) public lotteryIDFeeMapping;
    mapping(uint => uint) public lotteryIDDurationMapping;
    mapping(uint => LotteryState) public lotteryIDStateMapping;
    mapping(uint => uint) public lotteryIDBalanceMapping;
    mapping(uint => address payable[]) public lotteryIDEntrancesMapping;
    Counters.Counter private lotteryIDCounter;

    constructor(uint _creatorFee) {
        console.log("Deploying a ContractMaker with minimum fee:", _creatorFee);
        creatorFee = _creatorFee;
    }

    function changeCreatorFee(uint _newFee) public onlyOwner {
        console.log("Change fee to new value:", _newFee);
        creatorFee = _newFee;
    }

    function createLottery(uint entranceFee, uint durationSeconds) external payable {
        require(msg.value >= creatorFee, "Not enough ETH to create a lottery");
        console.log("Create a lottery with fee", entranceFee);
        uint lotteryID = lotteryIDCounter.current();        
        console.log("LotteryID", lotteryID);
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
        lotteryIDEntrancesMapping[lotteryID].push(msg.sender)
    }

    function stopEntrance(uint lotteryID) external {
        require(ownerLotteryIDMapping[lotteryID] == msg.sender, "Only creator of the Lottery can stop entrance");
        require(lotteryIDStateMapping[lotteryID] == LotteryState.Open, "Sorry, lottery is not open");
        lotteryIDStateMapping[lotteryID] = LotteryState.Stopped;
    }

    function issueRandomWinner(uint lotteryID) internal private {
        require(lotteryIDStateMapping[lotteryID] == LotteryState.Stopped, "Sorry, lottery is not stopped");
        uint numberOfEntrances = lotteryIDEntrancesMapping[lotteryID].length;
    }

    function calculateWinner(uint lotteryID) external {
        require(ownerLotteryIDMapping[lotteryID] == msg.sender, "Only creator of the Lottery can calculate winners");
        require(lotteryIDStateMapping[lotteryID] == LotteryState.Stopped, "Sorry, lottery is not stopped");
    }

    function winnerCalculated(uint lotteryID, address payable winnerAddress) internal private {        
        require(lotteryIDStateMapping[lotteryID] == LotteryState.Stopped, "Sorry, lottery is not stopped");
        lotteryIDStateMapping[lotteryID] = LotteryState.MoneyTransfered;
        winnerAddress.transfer(lotteryIDBalanceMapping(lotteryID));
        delete lotteryIDEntrancesMapping[lotteryID];
    }
}
