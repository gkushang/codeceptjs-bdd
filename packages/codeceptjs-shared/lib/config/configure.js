const merge = require('deepmerge');
const master_conf = require('./master/codecept.master.conf').master_conf;
const logger = require('../logger/logger');

logger.welcome();

/**
 * Create Configure with Master config
 *
 * @param {object} conf
 */
const create = (conf) => {
  const driver = process.env.DRIVER.toLowerCase();
  let browser;

  if (driver  === 'playwright') {
    browser = master_conf.helpers['Playwright'].browser;
    delete conf.helpers.WebDriver;
  } else {
    browser = master_conf.helpers['WebDriver'].browser;
    delete conf.helpers.Playwright;
  }

  logger.log({message: `Launching '${browser}' on ${driver}`, emoji: 'star2'});
  
  logger.log({ message: `Host: ${process.env.HOST}`, emoji: 'earth_americas'});

  return merge(
    merge(conf, master_conf),
    require('codeceptjs-saucelabs').config.saucelabs(
      process.env.SAUCE_USERNAME,
      process.env.SAUCE_KEY
    )
  );
};

module.exports = { create };
