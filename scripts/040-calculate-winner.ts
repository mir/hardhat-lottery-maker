// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { LotteryMaker } from "../typechain-types/contracts/LotteryMaker";
import { latestLotteryID, getLotteryMaker, LotteryState } from "./fixtures";
import { BigNumber } from "ethers";
import { logUrl } from "./log-helper";

async function calculateWinner(
  lotteryMaker: LotteryMaker,
  lotteryID: BigNumber  
  ) {  
  const deployer = await ethers.getNamedSigner("deployer")
  if (await lotteryMaker.lotteryIDStateMapping(lotteryID) >= LotteryState.Calculating) {
    console.log("Already calculated");
    return;
  }
  console.log(`Owner address=${deployer.address}`) 
  const tx1 = await lotteryMaker
    .connect(deployer)
    .calculateWinner(
      lotteryID,      
    );
  console.log("Waiting for transaction..." + logUrl(tx1.hash));
  await tx1.wait(1);  
  console.log("Done.")  
}

async function main() {  
  const lotteryMaker = await getLotteryMaker();  
  const lotteryID = await latestLotteryID(lotteryMaker);
  console.log(`Got a lotteryMaker with lotteryID=${lotteryID}`);
  await calculateWinner(lotteryMaker, lotteryID);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
