# Sample Project

This project demonstrates a basic Hardhat use case with a simple smart contract deploy to Polygon Testnet.

Please make sure you have some MATIC test token. You can get free MATIC test at: https://faucet.polygon.technology/

Follow these steps to get your own smart contracts on MUMBAI testnet.

Install dependencies:

```shell
npm i
```

Create .env file on the root of project with this value:

```txt
WALLET_PRIVATE_KEY=YOUR_PRIVATE_KEY
```

Finally, deploy to Polygon testnet:

```shell
npm run deploy:mumbai_testnet
```

Then you can check the deployed smart contract on Polygon scan [here](https://mumbai.polygonscan.com/tx/0xe5a267971d9c7fa7f11f5a21165db8c504a7b1cd02b16f8740559808e7a27d76)
