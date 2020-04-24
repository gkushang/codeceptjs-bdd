const shell = require('shelljs');
const fs = require('fs');
const path = require('path');

class UpdateEnvironments {
    constructor(envs) {
        this.codeceptDefaults = path.join(
            envs.rootPath,
            envs.relativePath,
            `acceptance`,
            'config',
            'dev.codecept.defaults'
        );

        this.codeceptSecrets = path.join(
            envs.rootPath,
            envs.relativePath,
            `acceptance`,
            'config',
            'dev.codecept.secrets'
        );

        console.log('codeceptDefaults: ', this.codeceptDefaults);
        console.log('codeceptSecrets: ', this.codeceptSecrets);
    }

    driver = (envs) => {
        shell.sed('-i', 'webdriver', envs.driver, this.codeceptDefaults);
    };

    relativePath = (envs) => {
        console.log('update relative path: ');
        // update relative path
        shell.sed(
            '-i',
            './acceptance/',
            './' + envs.relativePath + '/acceptance/',
            this.codeceptDefaults
        );
        console.log('update relative path: ');
    };

    sauceLabs = (envs) => {
        shell.sed(
            '-i',
            '<enter-your-saucelabs-username>',
            envs.sauceUsername,
            this.codeceptSecrets
        );

        shell.sed(
            '-i',
            '<enter-your-saucelabs-accesskey>',
            envs.sauceKey,
            this.codeceptSecrets
        );
    };

    updateHost = (envs) => {};
}

module.exports = UpdateEnvironments;
