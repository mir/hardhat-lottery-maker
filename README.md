# A lottery.
- Users can create lottery, becoming an owner (for a fee) specifying time period and minimum fee.

# Testing on local hardhat network

Run:

```shell
npx hardhat test
```

# Testing on Rinkeby

1. Add .env file:
ETHERSCAN_API_KEY=
RINKEBY_URL=
PRIVATE_KEY=
RINKEBY_VRFCOORDINATORV2=0x6168499c0cFfCaCD319c818142124B7A15E857ab
RINKEBY_KEYHASH=0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc
RINKEBY_SUBSCRIPTIONID=

2. Deploy contract

```shell
npx hardhat --network rinkeby deploy
```

3. Verify contract

```shell
npx hardhat --network rinkeby etherscan-verify
```


4. Run scripts on Rinkeby network

```shell
npx hardhat --network rinkeby run scripts/010-create-lottery.ts
npx hardhat --network rinkeby run scripts/020-add-consumer.ts
npx hardhat --network rinkeby run scripts/030-enter-and-stop.ts
npx hardhat --network rinkeby run scripts/040-calculate-winner.ts
npx hardhat --network rinkeby run scripts/1000-check-events.ts
```