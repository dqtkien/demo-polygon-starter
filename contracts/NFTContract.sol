// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';

contract NFTContract is ERC721URIStorage {
  constructor() ERC721('Panda NFT', 'PNFT') {
    // Mint NFT
    _mint(msg.sender, 0);

    // Set metadata
    _setTokenURI(0, 'ipfs://QmUyZoK21qb8YknXGfDB34RTY8vMqPb6Bsj9U9iLEnyrZR');
  }
}
