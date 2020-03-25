const debug = require("debug")("acceptance:config");
const merge = require("deepmerge");
const web_driver_commands = require.resolve(
  "../helpers/webdriver-commands.helper.js"
);
const custom_methods = require.resolve("../helpers/custom-methods.js");
const { steps } = require("./steps");

process.env.WEBDRIVER_BROWSER = process.profile || "chrome";
const DRIVER = process.env.DRIVER || "webdriver";

let conf = {
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
      grep: "@smoke",
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

if (DRIVER === "webdriver") {
  conf = merge(conf, require('./webdriver.conf'));

  if (process.profile && process.profile === "chrome:headless") {
    debug('Tests are running on "chrome:headless" browser');
    process.profile = process.profile.split(":")[0];
    conf.helpers.WebDriver.browser = process.profile;
    conf.helpers.WebDriver.capabilities = {
      chromeOptions: {
        args: ["--headless", "--disable-gpu", "--window-size=1920,1080"]
      }
    };
  } else if (
    process.profile &&
    (process.profile === "safari" || process.profile === "firefox")
  ) {
    conf.helpers.WebDriver.windowSize = "maximize";
  }

  if (!(process.profile && process.profile.match("sauce:[a-zA-Z]"))) {
    conf.multiple.parallel.browsers = [process.env.WEBDRIVER_BROWSER];
  }
}

if (DRIVER === 'playwright') {
  conf = merge(conf, require('./playwright.conf'));
}

module.exports = conf;
