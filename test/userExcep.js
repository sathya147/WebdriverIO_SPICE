const loginPage = require('../pages/login.page')
const configs = require('../configs')
const constants = require('../constants')

describe("SECOND TEST", function() {

    it("open site", async function() {
        await browser.url("http://3.111.106.69")
        await browser.pause(3000)
    })
    
    it("verify Login Page Title",  async function() {
        await expect(browser).toHaveTitleContaining(constants.LoginPageTitle)
    })

    it("Enter username", async function() {
        await loginPage.enterUsername(configs.username)
        await browser.pause(3000)
    })

})