// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function deployLotteryMaker(feeInEther="0.001") {
  const LotteryMaker = await ethers.getContractFactory("LotteryMaker");  
  const creatingFee = ethers.utils.parseEther(feeInEther);
  const coordinatorAddress = process.env.RINKEBY_VRFCOORDINATORV2
  const keyHash = process.env.RINKEBY_KEYHASH
  const subscriptionID = process.env.RINKEBY_SUBSCRIPTIONID
  const lotteryMaker = 
    await LotteryMaker.deploy(
      creatingFee,
      coordinatorAddress,      
      subscriptionID,
      keyHash
    );

  await lotteryMaker.deployed();
  console.log("LotteryMaker deployed to:", lotteryMaker.address);
  return lotteryMaker;
}

async function main() {  
  await deployLotteryMaker();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
