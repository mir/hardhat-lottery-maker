import { latestLotteryID, getLotteryMaker, DEFAULT_PAYMENT, latestWinner } from "./fixtures";
import { logUrl } from "./log-helper";

async function main() {  
  const lotteryMaker = await getLotteryMaker();    
  try {
    const lotteryID = await latestLotteryID(lotteryMaker);        
    console.log(`Latest lotteryID=${lotteryID}`);
  } catch (e) {
    console.log(e);
  }  
  try {
    const winner = await latestWinner(lotteryMaker);
    console.log(`Latest winner is ${logUrl(winner)}`);
  } catch (e) {
    console.log(e);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
