

const main = async () => {
const [owner, randomPerson] = await hre.ethers.getSigners();

//Compiles our contract and generrate the necesary files to work with our contract Under the artifacts directory
const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');

//Hardhat will create a local Ethereum network, only for this network.
//After completion it'll destroy that local ntwrk. Everytime it runs it'll be on a fresh blockchain
const waveContract = await waveContractFactory.deploy();

//Waits until our contract is deployed to local blockchain. Constructor runs when we actually deploy
await waveContract.deployed();

//Logs the address of the deployed contract. How we find our contract on the blockchain
console.log("Contract deployed to:", waveContract.address);
console.log("Contract deployed by:", owner.address);

//Call function to grab total # of waves
let waveCount;
waveCount = await waveContract.getTotalWaves();

//Call function to wave
let waveTxn = await waveContract.wave();
await waveTxn.wait();

//Call function to see if waves # changed
waveCount = await waveContract.getTotalWaves();
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    }
    catch (error){
        console.log(error);
        process.exit(1);
    }
};

runMain();
