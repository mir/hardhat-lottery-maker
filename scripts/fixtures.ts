import { ethers } from "hardhat";
import hre from "hardhat";
import { LotteryCreatedEventEventFilter, LotteryMaker } from "../typechain-types/contracts/LotteryMaker";
import { VRFCoordinatorV2Interface } from "../typechain-types/@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface"
import { BigNumber, EventFilter, logger, utils } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { getContractFactory } from "@nomiclabs/hardhat-ethers/types";
import { EnvManager } from "./env-manager";

export const DEFAULT_PAYMENT = parseEther("0.001");
export enum LotteryState {Open, Stopped, Calculating, MoneyTransfered};

export async function getVRFCoordinator() {
  const { deployments, getNamedAccounts } = hre;
  const {deployer} = await getNamedAccounts(); 
  const envs = new EnvManager(hre.network.name);
  const vrfCoordinatorAddress = envs.get("VRFCOORDINATORV2");  
  try {    
    const vrfCoordinator =
     await ethers.getContractAt("VRFCoordinatorV2Interface",vrfCoordinatorAddress,deployer);
    return vrfCoordinator as VRFCoordinatorV2Interface;
  } catch (e) {
    throw ReferenceError("Could not get vrfCoordinator contract. Is it deployed?");
  }
}

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
  if (logs.length === 0) {
    throw "No lottery creation found"
  } 
  const latestEvent = logs[logs.length - 1];
  const latestLotteryID = BigNumber.from(latestEvent.topics[2]);

  return latestLotteryID;
}

export async function latestWinner(lotteryMaker: LotteryMaker): Promise<BigNumber> {      
  const filter = {
    address: lotteryMaker.address,
    topics: [
      ethers.utils.id("WinnerCalculatedEvent(address,uint256)"),
      null,
      null
    ],
    fromBlock: 0,
  };

  const logs = await ethers.provider.getLogs(filter);
  if (logs.length === 0) {
    throw "No winners"
  }
  const latestEvent = logs[logs.length - 1];
  const latestLotteryID = BigNumber.from(latestEvent.topics[2]);

  return latestLotteryID;
}