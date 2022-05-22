// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import hre from "hardhat"
import { LotteryMaker } from "../typechain-types/contracts/LotteryMaker";
import {parseEther} from 'ethers/lib/utils';
import { latestLotteryID, getLotteryMaker, DEFAULT_PAYMENT } from "./fixtures";
import { logUrl } from "./log-helper";

async function createLottery(lotteryMaker: LotteryMaker, skipIfExists=true) {  
  try {
    const lotteryID = await latestLotteryID(lotteryMaker);
    if (skipIfExists) {
      console.log("Lottery is already exists with ID = " + lotteryID);
      return;
    }    
  } catch(e) {
    console.log("Creating new lottery.")    
  }
  const { getNamedAccounts} = hre;
  const {deployer} = await getNamedAccounts();  
  console.log("Deployer address:" + logUrl(deployer)); 
  const tx = await lotteryMaker.createLottery(
    DEFAULT_PAYMENT,
    { from: deployer, value: DEFAULT_PAYMENT }
    );    
  await tx.wait(1);
  console.log(`LotteryMaker is created a lottery with tx=${logUrl(tx.hash)}`);
  const lotteryID = await latestLotteryID(lotteryMaker);
  console.log("Created a lottery with ID: " + lotteryID);
}

async function main() {  
  const lotteryMaker = await getLotteryMaker();
  console.log("Got a LotteryMaker: " + logUrl(lotteryMaker.address));
  await createLottery(lotteryMaker);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
