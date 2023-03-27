import { task } from 'hardhat/config';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { NFTContract } from '../typechain-types';

task('mint', 'Mint NFT to specific address')
  .addParam('address', 'Receiver address')
  .addParam('id', 'TokenId')
  .setAction(async (taskArgs: any, hre: HardhatRuntimeEnvironment) => {
    const address = (taskArgs.address || '').trim();
    const tokenId = (taskArgs.id || '').trim();
    const account = await hre.ethers.getSigners();
    const isAddress = hre.ethers.utils.isAddress(address);
    if (isAddress) {
      try {
        const contract = <NFTContract>(
          await hre.ethers.getContractAt('NFTContract', '0xFe514492cBFB5b1713C7f7e8fd1c474D2739195f', account[0])
        );
        const result = await contract.connect(account[0]).mint(address, tokenId);
        console.log('Transaction done with txh = ', result);
      } catch (error) {
        console.log(error);
      }
    }
  });
