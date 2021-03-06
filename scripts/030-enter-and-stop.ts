// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import hre from "hardhat"
import { LotteryMaker } from "../typechain-types/contracts/LotteryMaker";
import { latestLotteryID, getLotteryMaker, DEFAULT_PAYMENT, LotteryState } from "./fixtures";
import { BigNumber } from "ethers";
import { logUrl } from "./log-helper";

async function enterTheLottery(
  lotteryMaker: LotteryMaker,
  lotteryID: BigNumber  
  ) {  
  const { getNamedAccounts} = hre;
  const deployer = await ethers.getNamedSigner("deployer")
  if (await lotteryMaker.lotteryIDStateMapping(lotteryID) > LotteryState.Open) {
    console.log("Already stopped from entering");
    return;
  }
  console.log(`Entering the lottery as a deployer=${logUrl(deployer.address)}`) 
  const tx1 = await lotteryMaker
    .connect(deployer)
    .enterLottery(
      lotteryID,
      {value: DEFAULT_PAYMENT, from: deployer.address}
    );
  console.log("Waiting for transaction..." + tx1.hash);
  await tx1.wait(1);  
  console.log("Done.")
  console.log(`Stopping the lottery as a deployer=${logUrl(deployer.address)}`) 
  const tx2 = await lotteryMaker
    .connect(deployer)
    .stopEntrance(lotteryID);
  console.log("Waiting for transaction..." + logUrl(tx2.hash));
  await tx2.wait(1);
  console.log("Done");
}

async function main() {  
  const lotteryMaker = await getLotteryMaker();  
  const lotteryID = await latestLotteryID(lotteryMaker);
  console.log(`Got a lotteryMaker with lotteryID=${lotteryID}`);
  await enterTheLottery(lotteryMaker, lotteryID);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
