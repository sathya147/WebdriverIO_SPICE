
class ElementUtils {

    //Enter Text (clear and enter)
    async doEnterText(element, textValue) {
        // try {  //the try catch is not required here since it is caputred in page actions, so that particular log can be created
        await element.waitForDisplayed()
        // }
        // catch(error) {
        //     throw new Error("Element not found ________________")
        // }
        await element.setValue(textValue)
    }

    //GET TITLE OF THE CURRENT PAGE
    async getTitle() {
        const title = await browser.getTitle()
        return title
    }

    	    //Append Text (add to existing text, at the end)
    async doAppendText(element, textValue) {
        await element.waitForDisplayed()
        await element.addValue(textValue)
    }

    //CLICK - BUTTON, CHECK BOX, RADIO BUTTON
    async doClick(element) {
        await element.waitForDisplayed()
        await element.click()
    }

	    //Append Text (add to existing text, at the end)
    async doAppendText(element, textValue) {
        await element.waitForDisplayed()
        await element.addValue(textValue)
    }


    //Append Text (add to existing text, at the end)
    async doAppendText(element, textValue) {
        await element.waitForDisplayed()
        await element.addValue(textValue)
    }


    //CLICK - BUTTON, CHECK BOX, RADIO BUTTON
    async doClick(element) {
        await element.waitForDisplayed()
        await element.click()
    }
    
    //CLICK - BUTTON, CHECK BOX, RADIO BUTTON
    async doClick(element) {
        await element.waitForDisplayed()
        await element.click()
    }

    //GET TEXT - OF ANY ELEMENT
    async doGetText(element) {
        await element.waitForDisplayed()
        return await element.getText()
    }


}

module.exports = new ElementUtils()