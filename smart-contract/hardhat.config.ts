import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
   
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      //@ts-ignore
      accounts:[process.env.PRIVATE_KEY]},
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  }

};
export default config;
