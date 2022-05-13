import { ethers } from "hardhat";
import hre from "hardhat";
import { LotteryMaker } from "../typechain-types/contracts/LotteryMaker";
import { BigNumber } from "ethers";
import { parseEther } from "ethers/lib/utils";

export const DEFAULT_PAYMENT = parseEther("0.001");

export async function getLotteryMaker() {
  const { deployments } = hre;
  try {
    const lotteryMakerDeployment = await deployments.get("LotteryMaker");  
    console.log("LotteryMaker deployed to:", lotteryMakerDeployment.address);
    const lotteryMakerFactory = await ethers.getContractFactory("LotteryMaker");
    const lotteryMaker = lotteryMakerFactory.attach(lotteryMakerDeployment.address) as LotteryMaker;
    return lotteryMaker;
  } catch (e) {
    throw ReferenceError("Could not get LotteryMaker contract. Is it deployed?");
  }  
}

export async function latestLotteryID(lotteryMaker: LotteryMaker): Promise<BigNumber> {  
  const { getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  let lastLotteryIndex = BigNumber.from(0);
  let lotteryID = BigNumber.from(0);
  try {
    while (true) {
      lotteryID = await lotteryMaker.ownerLotteryIDMapping(deployer, lastLotteryIndex);
      lastLotteryIndex.add(1);
    }    
  } catch (e) {
    return lastLotteryIndex;
  }
}
