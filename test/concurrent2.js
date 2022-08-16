const elementUtils = require('../utils/elementUtils')
const homePage = require('../pages/home.page')
const configs = require('../configs')

describe("SECOND TEST", function() {

    it("INTO TANZANIA site", async function() {
        await homePage.clickButtonTAarrow()
        await browser.pause(3000)
    })

})