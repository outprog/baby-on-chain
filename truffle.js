/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
require('dotenv').config();

const Web3 = require('web3')
const web3 = new Web3()
const WalletProvider = require('truffle-wallet-provider')
const Wallet = require('ethereumjs-wallet')

var kovanPrivateKey = new Buffer(process.env["KOVAN_PRIVATE_KEY"], 'hex')
var kovanWallet = Wallet.fromPrivateKey(kovanPrivateKey)
var kovanProvider = new WalletProvider(kovanWallet, 'https://kovan.infura.io/')
// var kovanProvider = new WalletProvider(kovanWallet, 'http://127.0.0.1:8887/')

var mainnetPrivateKey = new Buffer(process.env["MAINNET_PRIVATE_KEY"], 'hex')
var mainnetWallet = Wallet.fromPrivateKey(mainnetPrivateKey)
var mainnetProvider = new WalletProvider(mainnetWallet, 'https://mainnet.infura.io/')

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    kovan: {
      provider: kovanProvider,
      network_id: '42',
      gas: 4000000,
      gasPrice: web3.toWei('5', 'gwei'),
    },
    mainnet: {
      provider: mainnetProvider,
      network_id: '1',
      gas: 2000000,
      gasPrice: web3.toWei('20', 'gwei'),
    }
  }
};
