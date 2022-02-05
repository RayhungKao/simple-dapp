const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "clarify spare chief curve kidney leg syrup tape hurt slot fiber trap";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/a490d6a38f884087a7c8294756b4026b")
      },
      network_id: 3
    }
  }
};
