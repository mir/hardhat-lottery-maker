import { expect } from "chai";
import { ethers } from "hardhat";
import {loadFixture, deployContract} from 'ethereum-waffle';
import {Wallet, Contract, BigNumber} from "ethers";
import {MockProvider} from "ethereum-waffle";

describe("LotteryMaker", function () {
  async function fixture(_wallets: Wallet[], _mockProvider: MockProvider) {
    const LotteryMaker = await ethers.getContractFactory("LotteryMaker");
    const lotteryMaker = await LotteryMaker.deploy(0);
    await lotteryMaker.deployed();

    const [owner] = await ethers.getSigners();

    return { lotteryMaker, owner };
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
});
