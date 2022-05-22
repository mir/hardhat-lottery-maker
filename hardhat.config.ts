import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-deploy"

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more


const config: HardhatUserConfig = {  
  solidity: {
    version: '0.8.13',
    settings: {
      outputSelection: {
        "*": {
            "*": ["storageLayout"],
        },
      },
    }
  },
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_URL || "",
      chainId: 4,
      saveDeployments: true,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasMultiplier: 10,
      loggingEnabled: true,
    },
    matic: {
      url: process.env.MUMBAI_URL || "https://rpc-mumbai.maticvigil.com",
      saveDeployments: true,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasMultiplier: 10,
      loggingEnabled: true,
      verify: {
        etherscan: {
          apiUrl: process.env.POLYGONSCAN_API_URL,
          apiKey: process.env.POLYGONSCAN_API_KEY,
        }
      }
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  verify: { //for hardhat-deploy plugin
    etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY,
    }
  },
  namedAccounts: {
    deployer: {
        default: 0, // here this will by default take the first account as deployer      
    },
    user1:{
      default: 1, // here this will by default take the first account as deployer      
    }
  },  
};

export default config;
