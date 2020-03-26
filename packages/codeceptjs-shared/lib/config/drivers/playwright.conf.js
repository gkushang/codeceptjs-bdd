module.exports = {
  helpers: {
    Playwright: {
      waitForNavigation: 'domcontentloaded',
      waitForAction: 500,
      browser: process.profile || process.env.DEFAULT_PLAYWRIGHT_BROWSER
    }
  }
};
