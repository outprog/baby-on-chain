const BOC = artifacts.require("BabyOnChain");

contract('OutBancorToken Test', async (accounts) => {
    it("should buy all tokens success", async () => {
        let bo = await BOC.deployed()

        let res = await bo.motherName.call()
        assert.equal(res, '沈雨婷', 'failed')
    })
})