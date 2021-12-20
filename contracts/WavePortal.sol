//SPDX-License-Identifier: UNLICENSED

//Specify which version of Solidity, nothing lower
pragma solidity ^0.8.0;

//Imports hardhat console for logging
import "hardhat/console.sol";

//Create initial contract
contract WavePortal {
    constructor() {
        console.log("I am a contract");
    }
}