import { expect } from "chai";
import { ethers } from "hardhat";
import {loadFixture} from 'ethereum-waffle';
import { BigNumber, Wallet} from "ethers";
import {MockProvider} from "ethereum-waffle";
import { smock } from '@defi-wonderland/smock';

describe("LotteryMaker", function () {

  enum LotteryState {Open, Stopped, Calculating, MoneyTransfered};

  async function fixture(_wallets: Wallet[], _mockProvider: MockProvider) {
    const [owner, user1, user2] = await ethers.getSigners();
    const LotteryMaker = await ethers.getContractFactory("LotteryMaker");
    const coordinatorMock = await smock.fake('VRFCoordinatorV2Interface', {address: owner.address});
    const creatingFee = 0;
    const coordinatorAddress = coordinatorMock.address;
    const subscriptionID = 0;
    const keyHash = ethers.utils.formatBytes32String("keyHash");
    const lotteryMaker = await LotteryMaker.deploy(
      creatingFee, //Creating fee
      coordinatorAddress, //VRFCoordinatorV2 address
      subscriptionID,//SubscruptionID uint64
      keyHash
      );
    await lotteryMaker.deployed();        

    const feeInWei = ethers.utils.parseEther("0.001");
    await lotteryMaker.connect(owner).createLottery(feeInWei);    
    
    const requestID = 1234;
    return { lotteryMaker, feeInWei, owner, user1, user2, coordinatorMock, requestID };
  }

  it("Should deploy lottery maker with zero creating fee", async function () {
    const {lotteryMaker} = await loadFixture(fixture);
    expect(await lotteryMaker.creatorFee()).to.equal(0);    
  });

  it("Should create a lottery with 0.001 wei entrance fee", async function () {
    const {lotteryMaker, feeInWei, owner} = await loadFixture(fixture);
            
    const lotteryID = await lotteryMaker.ownerLotteryIDMapping(owner.address, 0);
    const fee = await lotteryMaker.lotteryIDFeeMapping(lotteryID);    
    expect(fee).to.equal(feeInWei);
  });

  it("User should enter a lottery", async function () {
    const {lotteryMaker, feeInWei, owner, user1} = await loadFixture(fixture);

    const feeToPay = feeInWei.add(100);
    const lotteryID = await lotteryMaker.ownerLotteryIDMapping(owner.address, 0);
    await lotteryMaker
      .connect(user1)
      .enterLottery(
        lotteryID,
         { from: user1.getAddress(), value: feeToPay }
      );
    const entrance0 = await lotteryMaker.lotteryIDEntrancesMapping(lotteryID, 0);    
    expect(entrance0).to.equal(user1.address);    
  });

  it("User should not enter a lottery", async function () {
    const {lotteryMaker, feeInWei, owner, user1} = await loadFixture(fixture);    
        
    const feeToFail = feeInWei.sub(100);
    const lotteryID = await lotteryMaker.ownerLotteryIDMapping(owner.address, 0);
    await expect(lotteryMaker
      .connect(user1)
      .enterLottery(lotteryID, { from: user1.getAddress(), value: feeToFail })
    ).to.be.reverted;
  });

  it("Should stop a lottery from entering", async function () {
    const {lotteryMaker, feeInWei, owner, user2} = await loadFixture(fixture);    
    const feeToPay = feeInWei.add(100);
    const lotteryID = await lotteryMaker.ownerLotteryIDMapping(owner.address, 0);
    await lotteryMaker
      .connect(user2)
      .enterLottery(lotteryID, { from: user2.getAddress(), value: feeToPay });
    
    await expect(lotteryMaker
      .connect(user2)
      .stopEntrance(lotteryID)
    ).to.be.reverted;
    
    await lotteryMaker
      .connect(owner)
      .stopEntrance(lotteryID);
      
    expect(await lotteryMaker.lotteryIDStateMapping(lotteryID))
      .to.equal(LotteryState.Stopped);
  });

  it("Should fire calculating a winner", async function () {
    const {lotteryMaker, owner, coordinatorMock, requestID} = await loadFixture(fixture);    
    const lotteryID = await lotteryMaker.ownerLotteryIDMapping(owner.address, 0);
    coordinatorMock.requestRandomWords.returns(requestID);
    await lotteryMaker.connect(owner).calculateWinner(lotteryID);

    expect(await lotteryMaker.lotteryIDStateMapping(lotteryID))
      .to.equal(LotteryState.Calculating);
  });

  it("Should transfer money and stop the lottery", async function () {
    const {lotteryMaker, owner, user1, user2, requestID} = await loadFixture(fixture);    
    const lotteryID = await lotteryMaker.ownerLotteryIDMapping(owner.address, 0);
    const oldUser1Balance = await user1.getBalance();
    const oldUser2Balance = await user2.getBalance();
    const oldLotteryIDBalance = await lotteryMaker.lotteryIDBalanceMapping(lotteryID);
    // Fake Chainlink Oracle response as a contract call
    await lotteryMaker
      .connect(owner)
      .rawFulfillRandomWords(requestID,[10]);

    // Check status of the lottery
    expect(await lotteryMaker.lotteryIDStateMapping(lotteryID))
      .to.equal(LotteryState.MoneyTransfered);

    const user1BalanceChange = (await user1.getBalance()).sub(oldUser1Balance);
    const user2BalanceChange = (await user2.getBalance()).sub(oldUser2Balance);
    const lotteryIDBalanceDeduction = 
      oldLotteryIDBalance.sub(
        await lotteryMaker.lotteryIDBalanceMapping(lotteryID)
      );      

    //Expect somebody to win the lottery and money to be transferred
    const userBalanceChange = user1BalanceChange.add(user2BalanceChange);
    expect(userBalanceChange).to.gt(BigNumber.from(0));
    expect(lotteryIDBalanceDeduction).to.gt(BigNumber.from(0));
    expect(userBalanceChange).to.equal(lotteryIDBalanceDeduction);
  });
});
