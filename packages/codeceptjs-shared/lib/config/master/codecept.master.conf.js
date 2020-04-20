const webdriverConf = require('../drivers/webdriver.conf');
const playwrightConf = require('../drivers/playwright.conf');
const chalk = require('chalk');
const host = require('../../host/host');
const emoji = require('node-emoji');

const driver_commands = require.resolve(
    '../../helpers/driver-commands.helper.js'
);
const custom_methods = require.resolve('../../helpers/custom-methods.js');
const { steps } = require('../bdd/steps');
const { pageObjects } = require('../bdd/pageObjects');

const DRIVER = process.env.DRIVER || 'webdriver';

const logInfo = (master_conf, driver) => {
    console.info(
        '\n' +
            chalk.bgBlue.bold(
                emoji.emojify(':rocket: ') +
                    `Launching browser '${master_conf.helpers[driver].browser}' on ${driver} ...\n`
            )
    );
};

let master_conf = {
    helpers: {
        Driver_commands: {
            require: driver_commands,
        },
        REST: {
            host: host.get(),
            timeout: '300000',
        },
    },
    plugins: {
        screenshotOnFail: {
            enabled: true,
        },
        allure: {
            enabled: true,
        },
        autoDelay: {
            enabled: true,
            delayBefore: 400,
        },
        retryFailedStep: {
            enabled: true,
            retries: 5,
        },
    },
    multiple: {
        parallel: {
            chunks: (files) => {
                let chunks = [];
                files.forEach((file) => {
                    chunks.push([file]);
                });
                return chunks;
            },
        },
        smoke: {
            grep: '@smoke',
            browsers: [process.env.WEBDRIVER_BROWSER],
        },
    },
    gherkin: {
        steps: steps(),
    },
    include: {
        ...pageObjects(),
        I: custom_methods,
    },
};

if (DRIVER.toLowerCase() === 'webdriver') {
    master_conf = webdriverConf.get(master_conf);
    logInfo(master_conf, 'WebDriver');
}
if (DRIVER.toLowerCase() === 'playwright') {
    master_conf = playwrightConf.get(master_conf);
    logInfo(master_conf, 'Playwright');
}

module.exports = { master_conf };
