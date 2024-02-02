import { ethers } from "hardhat";

async function main() {
  const entityName = "Ezekiel";
  const entityAge = 40;
  
  const simpleRegistry = await ethers.deployContract("SimpleRegistry", [entityName, entityAge]);
  const [owner] = await ethers.getSigners();
  await simpleRegistry.waitForDeployment();

  console.log(
  `My Registry contract is deployed to ${simpleRegistry.target}`
  );
 }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
