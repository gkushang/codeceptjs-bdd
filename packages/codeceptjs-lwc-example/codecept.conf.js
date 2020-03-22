const merge = require("deepmerge");
const master_config = require("codeceptjs-shared").config.master;
const codeceptjs_saucelabs = require("codeceptjs-saucelabs").config.saucelabs;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const DEFAULT_HOST = "recipes.lwc.dev/";
const RELATIVE_PATH = ".//acceptance/";
const PAGES_PATH = RELATIVE_PATH + "pages/";

const HOST = "https://" + (process.env.HOST ? process.env.HOST : DEFAULT_HOST);

// replace sauce_username & sauce_key with your SauceLabs Account
const SAUCE_USERNAME = process.env.SAUCE_USERNAME
  ? process.env.SAUCE_USERNAME
  : "<sauce_username>";
const SAUCE_KEY = process.env.SAUCE_KEY;

let conf = {
  output: RELATIVE_PATH + "report",
  cleanup: true,
  dev: {
    host: HOST
  },
  helpers: {
    WebDriver: {
      url: HOST
    },
    REST: {}
  },
  gherkin: {
    features: RELATIVE_PATH + "features/**/*.feature"
  },
  include: {
    I: RELATIVE_PATH + "helpers/custom.methods.js",
    helloBinding: PAGES_PATH + "lwc-recipes/hello-binding.page.js"
  },
  tests: RELATIVE_PATH + "mocha/*.test.js",
  name: "Salesforce LWC Recipes Acceptance Tests"
};

exports.config = merge(
  merge(conf, master_config),
  codeceptjs_saucelabs(SAUCE_USERNAME, SAUCE_KEY)
);
