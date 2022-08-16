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

    async getUsersName() {
        return await elementUtils.doGetText(this.getLoggedInUser())
    }

    async getRole() {
        return await elementUtils.doGetText(this.getUserRole())
    }

    //Action on Tanzania
    async clickButtonTAarrow() {
        await elementUtils.doClick(this.getTAarrow())
    }


}

module.exports = new HomePage()