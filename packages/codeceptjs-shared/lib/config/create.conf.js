const merge = require("deepmerge");

const createConf = function (conf) {
    if (process.env.DRIVER === 'playwright') {
        delete conf.helpers.WebDriver;
    } else {
        delete conf.helpers.Playwright
    }

    return merge(
        merge(conf, require("./codecept.master.conf")),
        require("codeceptjs-saucelabs").config.saucelabs(process.env.SAUCE_USERNAME, process.env.SAUCE_KEY)
    );
};

module.exports = {createConf};
