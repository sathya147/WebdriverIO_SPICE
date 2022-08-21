// const { default: $ } = require('webdriverio/build/commands/browser/$')
const elementUtils = require('../utils/elementUtils')
const constants = require('../constants')

class LoginPage {

    //variables
    // toAbort = process.abort()


    //page locators
    getUsername() {return $('input[name="email"]')}
    getPassword() {return $('input[name="password"]')}
    getLoginButton() {return $('button[type="submit"]')}


    //page actions
    async getLoginPageTitle() {
        const pageTitle = await elementUtils.getTitle()
        return pageTitle
    }

    //Verify Login Page Title
    async verifyLoginPageTitle() {
       await expect(browser).toHaveTitleContaining(constants.LoginPageTitle)
        // if(this.getLoginPageTitle() === 
    }

    async enterUsername(theUsername) {
        try {
        await elementUtils.doEnterText(this.getUsername(), theUsername)
        }
        catch(error) {
            console.log(" ============== Username Element not found")
            // process.abort()  //not a good option, reports do not generate
            return false
        }
    }

    async enterPassword(thePassword) {
        await elementUtils.doEnterText(this.getPassword(), thePassword)
    }

    async clickButtonLogin() {
        await elementUtils.doClick(this.getLoginButton())
    }

 

}

module.exports = new LoginPage()