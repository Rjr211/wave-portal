//SPDX-License-Identifier: UNLICENSED

//Specify which version of Solidity, nothing lower
pragma solidity ^0.8.0;

//Imports hardhat console for logging
import "hardhat/console.sol";

//Create initial contract
contract WavePortal {
    uint256 totalWaves;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }
}