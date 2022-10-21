require("@nomicfoundation/hardhat-toolbox");
const {GOERLI_URL, KEY} = require("./utils/constants");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: GOERLI_URL,
      accounts: [KEY]
    }
  }
};
