const { ethers } = require("hardhat");

require("dotenv").config({
  path: ".env",
});

// Initialize the RPC provider
const provider = new ethers.providers.JsonRpcProvider(
  process.env.HYPERSPACE_RPC
);

async function main() {
  // Retrieve the gas value from the network.
  const feeData = await provider.getFeeData();
  const maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
  /**
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so coinFile here is a factory for instances of our CoinFile contract.
    **/

  // Insert code here
}

// Call the main function and catch if there is any error
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// call main

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
