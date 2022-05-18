import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {parseEther} from 'ethers/lib/utils';
import { EnvManager } from '../scripts/env-manager';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const {deployments, getNamedAccounts} = hre;
    const {deploy} = deployments;
    const { deployer } = await getNamedAccounts();    

    const envManager = new EnvManager(hre.network.name);
    const coordinatorAddress = envManager.get("VRFCOORDINATORV2");
    const keyHash = envManager.get("keyHash");
    const subscriptionID = envManager.get("subscriptionID")

    console.log(subscriptionID)

    await deploy('LotteryMaker', {
        from: deployer,
        args: [
            parseEther("0.001"),
            coordinatorAddress,      
            subscriptionID,
            keyHash
        ],
        log: true,
      });      
};
export default func;