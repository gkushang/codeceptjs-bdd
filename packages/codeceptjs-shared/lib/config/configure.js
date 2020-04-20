const merge = require('deepmerge');
const master_conf = require('./master/codecept.master.conf').master_conf;
const logger = require('../logger/logger');
const driversConf = require('./drivers/drivers.conf');

logger.welcome();

/**
 * Create Configure with Master config
 *
 * @param {object} conf
 */
const create = (conf) => {
    const driver =
        master_conf.helpers[
            Object.keys(master_conf.helpers).find(
                (driver) =>
                    driver.toLowerCase() === process.env.DRIVER.toLowerCase()
            )
        ];

    if (!driver) {
        logger.error(
            `'${
                process.env.DRIVER
            }' is not a supported driver. Supported drivers are: [${Object.keys(
                driversConf
            )}]`
        );
    }

    const browser = driver.browser;

    logger.log({
        message: `Launching '${browser}' on ${driver}`,
        emoji: 'star2',
    });

    logger.log({
        message: `Host: ${process.env.HOST}`,
        emoji: 'earth_americas',
    });

    return merge(
        merge(conf, master_conf),
        require('codeceptjs-saucelabs').config.saucelabs(
            process.env.SAUCE_USERNAME,
            process.env.SAUCE_KEY
        )
    );
};

module.exports = { create };
