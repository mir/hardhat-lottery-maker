import hre from "hardhat";

export function logUrl(address: string): string {
    const networkName = hre.network.name;    
    let prefix = "";
    if (networkName === "matic") {
        prefix = "https://mumbai.polygonscan.com/search?f=0&q="
    } else if (networkName === "rinkeby") {
        prefix = "https://rinkeby.etherscan.io/search?f=0&q="
    }
    return prefix + address;
}