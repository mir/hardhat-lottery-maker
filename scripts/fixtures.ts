import { ethers } from "hardhat";
import hre from "hardhat";
import { LotteryCreatedEventEventFilter, LotteryMaker } from "../typechain-types/contracts/LotteryMaker";
import { BigNumber, EventFilter, logger, utils } from "ethers";
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
   
  const filter = {
    address: lotteryMaker.address,
    topics: [
      ethers.utils.id("LotteryCreatedEvent(address,uint256)"),
      null,
      null
    ],
    fromBlock: 0,
  };

  const logs = await ethers.provider.getLogs(filter);  
  const latestEvent = logs[logs.length - 1];
  const latestLotteryID = BigNumber.from(latestEvent.topics[2]);

  return latestLotteryID;
}
