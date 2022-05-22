# A lottery.
- Users can create lottery, becoming an owner (for a fee) specifying time period and minimum fee.

# Testing on local hardhat network

Run:

```shell
npx hardhat test
```

# Testing on Rinkeby and Polygon (Matic)

0. Create Chainlink VRF subscription 
https://vrf.chain.link/rinkeby
https://vrf.chain.link/mumbai/

1. Add .env file:
```shell
ETHERSCAN_API_KEY=
RINKEBY_URL=
PRIVATE_KEY=
RINKEBY_VRFCOORDINATORV2=0x6168499c0cFfCaCD319c818142124B7A15E857ab
RINKEBY_KEYHASH=0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc
RINKEBY_SUBSCRIPTIONID=
MATIC_VRFCOORDINATORV2=0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed
MATIC_KEYHASH=0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f
MATIC_SUBSCRIPTIONID=
POLYGONSCAN_API_KEY=
POLYGONSCAN_API_URL=https://api-testnet.polygonscan.com/
```


2. Deploy contract

```shell
npx hardhat --network rinkeby deploy
```

```shell
npx hardhat --network matic deploy
```

3. Verify contract

```shell
npx hardhat --network rinkeby etherscan-verify
```

```shell
npx hardhat --network matic etherscan-verify --api-key <API_KEY>
```

Send 5 LINK tokens to deployed contract and register Chainlink Upkeep https://keepers.chain.link/rinkeby
https://keepers.chain.link/mumbai


4. Run scripts on Rinkeby network

```shell
npx hardhat --network rinkeby run scripts/010-create-lottery.ts
npx hardhat --network rinkeby run scripts/020-add-consumer.ts
npx hardhat --network rinkeby run scripts/030-enter-and-stop.ts
npx hardhat --network rinkeby run scripts/040-calculate-winner.ts
npx hardhat --network rinkeby run scripts/1000-check-events.ts
```

Run scripts on Matic network

```shell
npx hardhat --network matic run scripts/010-create-lottery.ts
npx hardhat --network matic run scripts/020-add-consumer.ts
npx hardhat --network matic run scripts/030-enter-and-stop.ts
npx hardhat --network matic run scripts/040-calculate-winner.ts
npx hardhat --network matic run scripts/1000-check-events.ts
```