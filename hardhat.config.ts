import { HardhatUserConfig } from 'hardhat/config';
import dotenv from 'dotenv';
import '@nomicfoundation/hardhat-toolbox';

dotenv.config();

const walletPrivateKey = process.env.WALLET_PRIVATE_KEY!;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.9',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    goerli: {
      url: 'https://ethereum-goerli-rpc.allthatnode.com/',
      accounts: [walletPrivateKey],
    },
    mumbai_testnet: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [walletPrivateKey],
    },
  },
};

export default config;
