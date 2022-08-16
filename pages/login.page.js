// const { default: $ } = require('webdriverio/build/commands/browser/$')
const elementUtils = require('../utils/elementUtils')

class LoginPage {

    //page locators
    getUsername() {return $('input[name="email"]')}
    getPassword() {return $('input[name="password"]')}
    getLoginButton() {return $('button[type="submit"]')}


    //page actions
    async getLoginPageTitle() {
        const pageTitle = await elementUtils.getTitle()
        return pageTitle
    }

    async enterUsername(theUsername) {
        await elementUtils.doEnterText(this.getUsername(), theUsername)
    }

    async enterPassword(thePassword) {
        await elementUtils.doEnterText(this.getPassword(), thePassword)
    }

    async clickButtonLogin() {
        await elementUtils.doClick(this.getLoginButton())
    }

 

}

module.exports = new LoginPage()