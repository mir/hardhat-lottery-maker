// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import hre from "hardhat"
import { LotteryMaker } from "../typechain-types/contracts/LotteryMaker";
import {parseEther} from 'ethers/lib/utils';
import { BigNumber } from "ethers";

async function getLotteryMaker() {
  const {deployments} = hre;    
  const lotteryMakerDeployment = await deployments.get("LotteryMaker");  
  console.log("LotteryMaker deployed to:", lotteryMakerDeployment.address);
  const lotteryMakerFactory = await ethers.getContractFactory("LotteryMaker");
  const lotteryMaker  = lotteryMakerFactory.attach(lotteryMakerDeployment.address) as LotteryMaker;
  return lotteryMaker;
}

async function latestLotteryID(lotteryMaker: LotteryMaker): Promise<BigNumber> {
  const { getNamedAccounts} = hre;
  const {deployer} = await getNamedAccounts();
  let lastLotteryIndex = 0;
  let lotteryID = BigNumber.from(0);
  try {    
    while(true) {
      lotteryID = await lotteryMaker.ownerLotteryIDMapping(deployer,lastLotteryIndex);
      lastLotteryIndex++;
    }
  } catch (e) {
    return lotteryID;
  }  
 }

async function createLottery(lotteryMaker: LotteryMaker) {  
  const { getNamedAccounts} = hre;
  const {deployer} = await getNamedAccounts();  
  console.log("Deployer address:" + deployer); 
  await lotteryMaker.createLottery(
    parseEther("0.001"),
    { from: deployer, value: parseEther("0.001") }
    );
  console.log("LotteryMaker is created a lottery");
  const lotteryID = await latestLotteryID(lotteryMaker);
  console.log("Created a lottery with ID: " + lotteryID);
}

async function main() {  
  const lotteryMaker = await getLotteryMaker();
  console.log("Got a LotteryMaker: " + lotteryMaker.address);
  await createLottery(lotteryMaker);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
