const loginPage = require('../pages/login.page')
const homePage = require('../pages/home.page')
const configs = require('../configs')
const constants = require('../constants')
const { verifyLoginPageTitle } = require('../pages/login.page')

describe("Username Test", function() {

    it("open site", async function() {
        await browser.url("http://3.111.106.69")
        await browser.pause(3000);
    })

    
    it("verify Login Page Title",  async function() {
        await loginPage.verifyLoginPageTitle()
    })

    it("Enter username", async function() {
        await loginPage.enterUsername(configs.username)
        await browser.pause(2000)
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
        await homePage.verifyLoggedInUser(configs.superAdminUser1)
        // console.log("ADSFSADFDSAFDSAFSAD SADFDSFDSF ", await homePage.getUsersName());
    })

    //VERIFY LOGGED USER ROLE
    it("Verify Logged In User Role", async function() {
        await homePage.verifyLoggedInUserRole(configs.roleSuperAdmin)
    })

})