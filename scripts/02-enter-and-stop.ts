// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import hre from "hardhat"
import { LotteryMaker } from "../typechain-types/contracts/LotteryMaker";
import {parseEther} from 'ethers/lib/utils';
import { latestLotteryID, getLotteryMaker, DEFAULT_PAYMENT } from "./fixtures";
import { BigNumber } from "ethers";

async function enterTheLottery(
  lotteryMaker: LotteryMaker,
  lotteryID: BigNumber  
  ) {  
  const { getNamedAccounts} = hre;
  const {deployer} = await getNamedAccounts();   
  await lotteryMaker
    .connect(deployer)
    .enterLottery(
      lotteryID,
      {value: DEFAULT_PAYMENT, from: deployer}
    );
  await lotteryMaker
    .connect(deployer)
    .stopEntrance(lotteryID);
}

async function main() {  
  const lotteryMaker = await getLotteryMaker();  
  const lotteryID = await latestLotteryID(lotteryMaker);
  console.log(`Got a lotteryMaker with lotteryID ${lotteryID}`);
  await enterTheLottery(lotteryMaker, lotteryID);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
