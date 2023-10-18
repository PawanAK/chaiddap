const hre = require("hardhat");

async function main() {
  const Chai = await hre.ethers.getContractFactory("chai");
const chai = await Chai.deploy();

const token = await ethers.deployContract("chai");
console.log("Deployed Contract Address:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});