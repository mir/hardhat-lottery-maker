export function dotEnvData(property: string, network: string): string {
    const envVarName = network.toUpperCase() + "_" + property.toUpperCase();
    const coordinatorAddress = process.env[envVarName];
    if (coordinatorAddress) {
        return coordinatorAddress;
    } else {
        throw `There is no property ${envVarName} in .env file`
    }    
}

export class EnvManager {
    #chainName: string;
    constructor(_chainName: string) {
        this.#chainName = _chainName;
    }

    public get = (property:string) => {
        return dotEnvData(property,this.#chainName);
    }
}