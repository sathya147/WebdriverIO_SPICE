const elementUtils = require('../utils/elementUtils')

class HomePage {

    //Page Locators
    getLoggedInUser() {return $('//div[@class="subtle-small-text"]/preceding-sibling::div')}
    getUserRole() {return $('//div[@class="subtle-small-text"]')}
    getTAarrow() {return $('//div[@title="Tanzania"]/../../following-sibling::div')}

    //page actions
    async getHomePageTitle() {
        await elementUtils.getTitle()
    }

    //Verify Home Page Title
    async verifyHomePageTitle() {
        await expect(browser).toHaveTitleContaining(constants.HomePageTitle)
    }

    async getUsersName() {
        return await elementUtils.doGetText(this.getLoggedInUser())
    }

    //Verify Logged-in username
    async verifyLoggedInUser(theUsersName) {
        expect(await this.getUsersName()).toBe(theUsersName)
    }

    async getRole() {
        return await elementUtils.doGetText(this.getUserRole())
    }

    //Verify Logged-in user's Role
    async verifyLoggedInUserRole(theUsersRole) {
        expect(await this.getRole()).toBe(theUsersRole)
    }

    //Action on Tanzania
    async clickButtonTAarrow() {
        await elementUtils.doClick(this.getTAarrow())
    }


}

module.exports = new HomePage()