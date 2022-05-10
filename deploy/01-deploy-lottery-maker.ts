import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {parseEther} from 'ethers/lib/utils';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const {deployments, getNamedAccounts} = hre;
    const {deploy} = deployments;
    const { deployer } = await getNamedAccounts();

    const coordinatorAddress = process.env.RINKEBY_VRFCOORDINATORV2
    const keyHash = process.env.RINKEBY_KEYHASH
    const subscriptionID = process.env.RINKEBY_SUBSCRIPTIONID

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