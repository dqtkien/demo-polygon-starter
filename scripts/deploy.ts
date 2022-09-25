import hre from 'hardhat';

async function main() {
  const contractFactory = await hre.ethers.getContractFactory('NFTContract');
  const contract = await contractFactory.deploy();
  await contract.deployed();
  console.log('Deploy contract to', hre.network.name);
  console.log('Contract deployed with address:', contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
