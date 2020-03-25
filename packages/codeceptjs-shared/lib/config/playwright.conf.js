module.exports = {
  helpers: {
    Playwright: {
      waitForNavigation: ["domcontentloaded", "networkidle0"],
      waitForAction: 500
    },
  },


};
