import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {parseEther} from 'ethers/lib/utils';
import { dotEnvData } from '../scripts/env-manager';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const {deployments, getNamedAccounts} = hre;
    const {deploy} = deployments;
    const { deployer } = await getNamedAccounts();    

    const coordinatorAddress = dotEnvData("VRFCOORDINATORV2",hre.network.name);
    const keyHash = dotEnvData("keyHash",hre.network.name);
    const subscriptionID = dotEnvData("subscriptionID",hre.network.name)

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