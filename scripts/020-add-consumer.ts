// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import hre from "hardhat"
import { getLotteryMaker, getVRFCoordinator } from "./fixtures";
import { dotEnvData } from "./env-manager";
import { logUrl } from "./log-helper";

async function addConsumerToSubscription(
  lotteryMakerAddress: string
  ) {      
    const deployer = await ethers.getNamedSigner("deployer")
    const vrfCoordinator = await getVRFCoordinator();
    const subscriptionID = dotEnvData("subscriptionID",hre.network.name)
    const tx = await vrfCoordinator.addConsumer(
      subscriptionID,
      lotteryMakerAddress);
    console.log(`Waiting for transaction tx=${logUrl(tx.hash)}`);
    await tx.wait(2);
    console.log(`Added lotteryMaker (${logUrl(lotteryMakerAddress)}) to subscription ${subscriptionID}, tx=${logUrl(tx.hash)}`);
}

async function main() {  
  const lotteryMaker = await getLotteryMaker();    
  console.log(`Got a lotteryMaker ${logUrl(lotteryMaker.address)}`);
  await addConsumerToSubscription(lotteryMaker.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
