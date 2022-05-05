import { expect } from "chai";
import { ethers } from "hardhat";
import {loadFixture} from 'ethereum-waffle';
import {Wallet} from "ethers";
import {MockProvider} from "ethereum-waffle";

describe("LotteryMaker", function () {
  async function fixture(_wallets: Wallet[], _mockProvider: MockProvider) {
    const LotteryMaker = await ethers.getContractFactory("LotteryMaker");
    const lotteryMaker = await LotteryMaker.deploy(0);
    await lotteryMaker.deployed();

    const [owner, user1, user2] = await ethers.getSigners();    

    const feeInWei = ethers.utils.parseEther("0.001");
    await lotteryMaker.createLottery(feeInWei);
    const lotteryID = await lotteryMaker.ownerLotteryIDMapping(owner.address);

    return { lotteryMaker, lotteryID, feeInWei, owner, user1, user2 };
  }

  it("Should deploy lottery maker with zero creating fee", async function () {
    const {lotteryMaker} = await loadFixture(fixture);
    expect(await lotteryMaker.creatorFee()).to.equal(0);    
  });

  it("Should create a lottery with 0.001 wei entrance fee", async function () {
    const {lotteryMaker, owner} = await loadFixture(fixture);

    const feeInWei = ethers.utils.parseEther("0.001");
    await lotteryMaker.createLottery(feeInWei)
        
    const lotteryID = await lotteryMaker.ownerLotteryIDMapping(owner.address);    
    const fee = await lotteryMaker.lotteryIDFeeMapping(lotteryID);    
    expect(fee).to.equal(feeInWei);
  });

  it("User should enter a lottery", async function () {
    const {lotteryMaker, lotteryID, feeInWei, user1} = await loadFixture(fixture);

    const feeToPay = feeInWei.add(100);
    await lotteryMaker.connect(user1).enterLottery(lotteryID, { from: user1.getAddress(), value: feeToPay });
    const entrance0 = await lotteryMaker.lotteryIDEntrancesMapping(lotteryID, 0);    
    expect(entrance0).to.equal(user1.address);    
  });

  it("User should not enter a lottery", async function () {
    const {lotteryMaker, lotteryID, feeInWei, user1} = await loadFixture(fixture);    
    
    const feeToFail = feeInWei.sub(100);
    await expect(lotteryMaker
      .connect(user1)
      .enterLottery(lotteryID, { from: user1.getAddress(), value: feeToFail })
    ).to.be.reverted;
  });
});
