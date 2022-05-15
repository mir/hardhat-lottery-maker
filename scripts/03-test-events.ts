import { latestLotteryID, getLotteryMaker, DEFAULT_PAYMENT } from "./fixtures";

async function main() {  
  const lotteryMaker = await getLotteryMaker();  
  const lotteryID = await latestLotteryID(lotteryMaker);    
  console.log(`Latest lotteryID=${lotteryID}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
