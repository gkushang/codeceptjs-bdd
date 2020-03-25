module.exports = {
  helpers: {
    WebDriver: {
      browser: process.env.WEBDRIVER_BROWSER,
      smartWait: 5000,
      waitForTimeout: 20000,
      timeouts: {
        implicit: 5000,
        script: 60000,
        "page load": 10000
      }
    },
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ["selenium-standalone"]
    }
  }
};
