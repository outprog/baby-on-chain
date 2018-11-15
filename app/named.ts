const contract = require('truffle-contract')

const truffle = require('../truffle.js')
const provider = truffle.networks.mainnet.provider
const contractJson = require('../build/contracts/BabyOnChain.json')
const boc = contract(contractJson)
boc.setProvider(provider)

const run = async () => {
    const instance = await boc.deployed()
    const res = await instance.named(
        '熊雨潇',
        { from: provider.getAddress() }
    )
    console.log(res)
}

run()