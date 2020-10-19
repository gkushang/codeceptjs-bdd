const Helper = codeceptjs.helper;
const { locatorStrategy } = require('query-selector-shadow-dom/plugins/webdriverio');

class Driver_commands extends Helper {
    _before() {
        // const { WebDriver } = this.helpers
        // const { browser } = WebDriver;

        // // get all cookies according to http://webdriver.io/api/protocol/cookie.html
        // // any helper method should return a value in order to be added to promise chain
        // browser.addLocatorStrategy('shadow', locatorStrategy);
    }

    async fill(locator, text) {
        console.log('this.helpers:: ', this.helpers);

        const { WebDriver } = this.helpers
        const { browser } = WebDriver;
        browser.addLocatorStrategy('shadow', locatorStrategy);

        console.log('\n\n===== adding Shadow CUSTOM ======\n\n');
        const el = await browser.custom$('shadow', locator);
        el.setValue(text);
    }

    driver() {
        return this.helpers.WebDriver || this.helpers.Playwright;
    }

    scrollAndClick(element) {
        const I = this.driver();
        this.scrollToElement(element);
        return I.click(element);
    }

    async _forEachAsync(array, callback) {
        const inputArray = Array.isArray(array) ? array : [array];
        const values = [];
        for (let index = 0; index < inputArray.length; index++) {
            let res = await callback(inputArray[index], index, inputArray);
            if (Array.isArray(res) && expandArrayResults) {
                res.forEach((val) => values.push(val));
            } else if (res) {
                values.push(res);
            }
        }
        return values;
    }

    async seeVisible(locator) {
        const el = await this.driver()._locate(locator, false);
        let isDisplayed = await this._forEachAsync(el, async (el) => el.isDisplayed());
        return Array.isArray(isDisplayed) && isDisplayed[0] === true;
    }

    scrollDownToPixel(elementId, pixel) {
        const I = this.driver();
        I.wait(2);
        I.waitForElement('#' + elementId);
        I.wait(1);
        return I.executeScript('document.getElementById("' + elementId + '").scrollTop = ' + pixel);
    }

    scrollToElement(locator) {
        const I = this.driver();
        return I.scrollTo(locator, 0, -100);
    }
}

module.exports = Driver_commands;
