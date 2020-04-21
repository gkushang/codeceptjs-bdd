const cli = require('cli-ux');
const emoji = require('node-emoji');
const chalk = require('chalk');
const figlet = require('figlet');

const log = (logMessage) => {
    let message = '';

    if (logMessage.emoji) {
        message = `${emoji.get(logMessage.emoji)}  `;
    }

    message = message.concat(logMessage.message);

    cli.default.log(chalk.bgBlue.bold(message.concat('\n')));
};

const error = (ROOT_PATH) => {
    console.error(
        '\n' +
            emoji.emojify(':warning:  ') +
            chalk.red.bold(
                `package.json does not exists at the ${ROOT_PATH}. Looks like the node project hasn't initialized yet.\n`
            ) +
            emoji.emojify(':point_right:  ') +
            chalk.blue.bold(
                `Don't worry! We are copying the existing to continue the setup. Please update the file once the setup is done!`
            ) +
            emoji.emojify(':zap:  ')
    );
};

const welcome = () => {
    console.clear();

    cli.default.log(
        '\n' +
            chalk.yellow(
                figlet.textSync('BDD Codecept JS', {
                    font: 'Ghost',
                    horizontalLayout: 'default',
                    verticalLayout: 'default',
                })
            )
    );

    cli.default.log(
        '\n\n' +
            emoji.emojify(':tada: ') +
            chalk.blue.underline.bold('Welcome to CodeceptJs-BDD CLI!')
    );

    cli.default.log(
        chalk.green.bold(
            '\nThe CodeceptJs-BDD CLI is a command-line interface tool that creates the ' +
                chalk.blue.bold.underline('CodeceptJS BDD Tests') +
                ' to your workspace. It will create ' +
                chalk.blue.bold.underline('acceptance') +
                ' directory at your <tests> location and ' +
                chalk.blue.bold.underline('configurations') +
                ' under your workspace.\n'
        )
    );
};

const saucelabsInfo = (username, key) => {
    cli.default.log(
        '\n' +
            chalk.bold.red(
                emoji.emojify(':warning:  ') +
                    'You must export Saucelabs Access Key through Environment Variable "SAUCE_KEY" to run your tests on Saucelabs. It is not recommend to store it on the Source Control.\n\n'
            ) +
            chalk.bold.red(
                emoji.emojify(':information_desk_person:  ') +
                    'It is recommended to export your Saucelabs Username and Access Key through your ./bash_profile or ./zshrc. Add following to your profile:'
            ) +
            chalk.bold.red(
                '\n\n' +
                    'export SAUCE_USERNAME=' +
                    username +
                    '\n' +
                    'export SAUCE_KEY=' +
                    key +
                    '\n\n'
            )
    );
};

const success = (filepath) => {
    cli.default.log(
        '\n' +
            chalk.yellow.bold(
                emoji.emojify(':clap: :thumbsup:') +
                    ` Done! Acceptance Tests Created at ` +
                    chalk.blue.bold(filepath) +
                    '\n'
            )
    );
};

const failure = (message) => {
    cli.default.log(
        '\n' +
            chalk.bold.red(
                emoji.emojify(':warning:  ') +
                    emoji.emojify(':disappointed: ') +
                    'Error: ' +
                    message
            )
    );
    shell.exit(1);
};
module.exports = { log, welcome, error, success, failure, saucelabsInfo };
