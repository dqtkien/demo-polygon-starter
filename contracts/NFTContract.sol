// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';

contract NFTContract is ERC721URIStorage {
  address public owner;

  constructor() ERC721('Panda NFT', 'PNFT') {
    owner = msg.sender;
    // Mint NFT
    _mint(msg.sender, 0);
    // Set metadata
    _setTokenURI(0, 'ipfs://QmUyZoK21qb8YknXGfDB34RTY8vMqPb6Bsj9U9iLEnyrZR');
  }

  modifier onlyOwner() {
    if (msg.sender != owner) {
      revert();
    }
    _;
  }

  function mint(address _to, uint256 _tokenId) public onlyOwner returns (uint256) {
    _mint(_to, _tokenId);
    return _tokenId;
  }
}
