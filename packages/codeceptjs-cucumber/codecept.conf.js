const createConf = require('codeceptjs-shared').createConf;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const DEFAULT_HOST = "github.com";
const RELATIVE_PATH = "./acceptance/";
const PAGES_PATH = RELATIVE_PATH + "pages/";

const HOST = "https://" + (process.env.HOST ? process.env.HOST : DEFAULT_HOST);

let conf = {
  output: RELATIVE_PATH + "report",
  cleanup: true,
  dev: {
    host: HOST
  },
  helpers: {
    Playwright : {
      url: HOST,
      show: true
    },
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
    ghHomePage: PAGES_PATH + "github/gh-home.page.js",
    ghSearchPage: PAGES_PATH + "github/gh-search.page.js"
  },
  tests: RELATIVE_PATH + "mocha/*.test.js",
  name: "<name>"
};

exports.config = createConf(conf);
