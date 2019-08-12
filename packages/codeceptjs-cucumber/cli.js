const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');
const shell = require('shelljs');
const emoji = require('node-emoji');

const init = () => {
    console.log('\n' + 
        chalk.yellow(
            figlet.textSync('E2E Codecept JS', {
                font: 'Ghost',
                horizontalLayout: 'default',
                verticalLayout: 'default'
            })
        )
    );

    console.log(chalk.blue.underline.bold(
        '\nWelcome to CodeceptJs-E2E CLI!'
    ))

    console.log(
        chalk.green.bold(
        '\nThe CodeceptJs-E2E CLI is a command-line interface tool that you use to Create and Initialize the base ' +
            chalk.blue.bold.underline('CodeceptJS Cucumber E2E Frameowork') +
            ' to your workspace. It will create ' + chalk.blue.bold.underline('acceptance') + ' directory at your acceptance test location and ' + chalk.blue.bold.underline('configurations') + ' under your workspace.\n'));
}

const askInitQuestions = () => {
    const questions = [
        {
            name: 'DESIRED_PROJECT_PATH',
            type: 'input',
            message: 'Enter the path to your destination Root project: '
        },
        {
            name: 'ACCEPTANCE_PATH',
            type: 'input',
            message: 'Enter the path to your desitnation Acceptance tests location: '
        },
        {
            type: 'confirm',
            name: 'RUN',
            message: 'The CLI also offers to test your setup and configurations. It provides the simple example tests of GitHub Search Feature. Do you want to run a sample GitHub Tests once your Setup is complete?'
        }


    ];
    return inquirer.prompt(questions);
};

const askRunQuestions = () => {
    const questions = [
        {
            type: 'confirm',
            name: 'RUN',
            message: 'The setup comes with examples of GitHub Acceptance Tests. Do you want to run a sample GitHub Tests to check your setup?'
        }

    ];
    return inquirer.prompt(questions);
};

const success = (filepath) => {
    console.log('\n' +
        chalk.white.bgRed.bold(emoji.emojify(':clap: :thumbsup:') + ` Done! Acceptance Tests Created at ${filepath}\n`)
    );
};

const failure = (message) => {
    console.log('\n' +
        chalk.bold.red(emoji.emojify(':warning:  ') + emoji.emojify(':disappointed: ') + 'Error: ' + message)
    );
    shell.exit(1);
};

const run = async () => {
    init();

    const answers = await askInitQuestions();

    const { DESIRED_PROJECT_PATH, ACCEPTANCE_PATH, RUN } = answers;

    shell.cp('-R', 'packages/codeceptjs-cucumber/acceptance', ACCEPTANCE_PATH);
    shell.cp('-R', 'packages/codeceptjs-cucumber/codecept.conf.js', ACCEPTANCE_PATH);
    shell.cd(DESIRED_PROJECT_PATH);

    if (shell.exec('yarn add codeceptjs-saucelabs codeceptjs-shared @wdio/selenium-standalone-service allure-commandline codeceptjs codeceptjs-selenium debug faker protractor rimraf should webdriverio deepmerge -D' ).code !== 0) {
        failure('Yarn command failed.');
    }

    if(RUN === true) {
        if (shell.exec('./node_modules/.bin/codeceptjs run --config=./modules/codecept.conf.js --grep=@search_results' ).code !== 0) {
            failure('Execution of Acceptance Test Failed.');
        }
    }

    success(ACCEPTANCE_PATH);
};

run();

