const loginPage = require('../pages/login.page')
const homePage = require('../pages/home.page')
const configs = require('../configs')
const constants = require('../constants')

describe("Username Test", function() {

    it("open site", async function() {
        await browser.url("http://3.111.106.69")
        await browser.pause(5000);
    })

    
    it("verify Login Page Title",  async function() {
        await expect(browser).toHaveTitleContaining(constants.LoginPageTitle)
    })

    it("Enter username", async function() {
        await loginPage.enterUsername(configs.username)
        await browser.pause(3000)
    })

    //ENTER PASSWORD
    it("Enter Password", async function() {
        await loginPage.enterPassword(configs.password)
        await browser.pause(2000)
    })	    
        
    //CLICK LOGIN
    it("Click Login", async function() {
        await loginPage.clickButtonLogin()
        await browser.pause(2000)
    })    
    
    //VERIFY LOGGED IN USER
    it("Verify Logged In User", async function() {
        expect(await homePage.getUsersName()).toBe(configs.superAdminUser1)
        console.log("ADSFSADFDSAFDSAFSAD SADFDSFDSF ", await homePage.getUsersName());
    })

    //VERIFY LOGGED USER ROLE
    it("Verify Logged In User Role", async function() {
        expect(await homePage.getRole()).toBe(configs.roleSuperAdmin)
    })
    //sathya

})