import { expect } from "chai";
import { ethers } from "hardhat";

describe("LotteryMaker", function () {
  it("Should deploy lottery maker with zero creating fee", async function () {
    const LotteryMaker = await ethers.getContractFactory("LotteryMaker");
    const lotteryMaker = await LotteryMaker.deploy(0);
    await lotteryMaker.deployed();

    expect(await lotteryMaker.creatorFee()).to.equal(0);    
  });
});
