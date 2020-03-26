const debug = require('debug')('acceptance:config');
const merge = require('deepmerge');
const webdriverConf = require('../drivers/webdriver.conf');

const web_driver_commands = require.resolve(
  '../../helpers/webdriver-commands.helper.js'
);
const custom_methods = require.resolve('../../helpers/custom-methods.js');
const { steps } = require('../bdd/steps');

const DRIVER = process.env.DRIVER || 'webdriver';

let master_conf = {
  helpers: {
    WebDriver_commands: {
      require: web_driver_commands
    }
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true
    },
    autoDelay: {
      enabled: true,
      delayBefore: 400
    },
    retryFailedStep: {
      enabled: true,
      retries: 5
    }
  },
  multiple: {
    parallel: {
      chunks: files => {
        let chunks = [];
        files.forEach(file => {
          chunks.push([file]);
        });
        return chunks;
      }
    },
    smoke: {
      grep: '@smoke',
      browsers: [process.env.WEBDRIVER_BROWSER]
    }
  },
  gherkin: {
    steps: steps()
  },
  include: {
    I: custom_methods
  }
};

if (DRIVER === 'webdriver') {
  master_conf = webdriverConf.get(master_conf);
}
if (DRIVER === 'playwright') {
  master_conf = merge(master_conf, require('../drivers/playwright.conf'));
}

module.exports = { master_conf };
