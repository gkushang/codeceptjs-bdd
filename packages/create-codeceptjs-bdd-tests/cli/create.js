#!/usr/bin/env node

const chalk = require('chalk');
const figlet = require('figlet');
const shell = require('shelljs');
const emoji = require('node-emoji');
const path = require('path');
const fs = require('fs');
const { addNpmScripts, installDepedencies } = require('./add.to.package');
const log = require('./logger');
const {
    aboutProjectPaths,
    aboutSauceLabs,
    aboutDriver,
    aboutScenarioExeuctions,
    aboutSauceLabsAccount,
} = require('./ask');

const run = async () => {
    /*
     * Copy acceptance tests
     */
    const copyAcceptanceTests = async () => {
        const acceptanceTestsPath = path.join(
            ROOT_PATH,
            RELATIVE_PATH,
            ACCEPTANCE
        );

        console.log('paths:: ================= ', acceptanceTestsPath);
        if (!fs.existsSync(acceptanceTestsPath)) {
            shell.mkdir('-p', acceptanceTestsPath);
        }

        shell.cp(
            '-R',
            path.join(process.cwd(), ACCEPTANCE),
            path.join(ROOT_PATH, RELATIVE_PATH)
        );

        console.log('copy done');
    };

    /*
     * Update Driver
     */
    const updateDriver = async () => {
        if (DRIVER === 'WebDriver') {
            const { INTEGRATE_SAUCE_LABS } = await aboutSauceLabs();

            if (INTEGRATE_SAUCE_LABS) {
                const {
                    SAUCE_USERNAME,
                    SAUCE_KEY,
                } = await aboutSauceLabsAccount();
                shell.sed('-i', '<sauce_username>', SAUCE_USERNAME, configFile);
                log.saucelabsInfo(SAUCE_USERNAME, SAUCE_KEY);
            }
        }

        shell.sed('-i', 'webdriver', DRIVER, configFile);
    };

    /*
     * Execute Scenarios
     */
    const executeScenario = async () => {
        if (SHOULD_EXECUTE) {
            shell.cd(ROOT_PATH);

            console.log(
                '\n' +
                    chalk.green(
                        figlet.textSync('Running Tests', {
                            font: 'speed',
                            horizontalLayout: 'default',
                            verticalLayout: 'default',
                        })
                    )
            );

            if (
                shell.exec(
                    `DRIVER=${DRIVER} ./node_modules/.bin/codeceptjs run --grep=@search_results --verbose`
                ).code !== 0
            ) {
                log.failure('Execution of Acceptance Test Failed.');
            }
        }
    };

    const ACCEPTANCE = 'acceptance';

    log.welcome();

    // ask about project paths
    const {
        PROJECT_NAME,
        ROOT_PATH,
        RELATIVE_PATH,
    } = await aboutProjectPaths();

    const { DRIVER } = await aboutDriver();

    // create directoty and copy acceptnace
    if (!fs.existsSync(ROOT_PATH)) {
        shell.mkdir('-p', ROOT_PATH);
    }

    // copy acceptance tests
    copyAcceptanceTests();

    // copy codecept conf
    shell.cp('-R', path.join(process.cwd(), 'codecept.conf.js'), ROOT_PATH);

    console.log('copies =====');
    // get config and packagejson
    const configFile = path.join(ROOT_PATH, 'codecept.conf.js');
    const packageJson = path.join(ROOT_PATH, 'package.json');

    // update project name
    shell.sed('-i', '<name>', PROJECT_NAME, configFile);

    // update relative path
    shell.sed(
        '-i',
        './acceptance/',
        './' + RELATIVE_PATH + '/acceptance/',
        configFile
    );

    // create package.json if not exists
    if (!fs.existsSync(path.join(ROOT_PATH, 'package.json'))) {
        log.error(ROOT_PATH);
        shell.cp('-R', path.join(process.cwd(), 'package.json'), ROOT_PATH);
    }

    shell.cd(ROOT_PATH);

    await updateDriver();

    const { SHOULD_EXECUTE } = await aboutScenarioExeuctions();

    addNpmScripts(packageJson);

    installDepedencies();

    executeScenario();

    log.success(path.join(ROOT_PATH, RELATIVE_PATH));
};

run();
