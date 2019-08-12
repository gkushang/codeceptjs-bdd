const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");

const init = () => {
    console.log(
        chalk.green(
            figlet.textSync("CodeceptJS E2E Framework", {
                font: "Ghost",
                horizontalLayout: "default",
                verticalLayout: "default"
            })
        )
    );
}

const askQuestions = () => {
    const questions = [
        {
            name: "DESIRED_PROJECT_PATH",
            type: "input",
            message: "Enter the path to your desired project: "
        },
        {
            name: "ACCEPTANCE_PATH",
            type: "input",
            message: "Enter the path to colocate the Acceptance tests: "
        }

    ];
    return inquirer.prompt(questions);
};

const askQuestionsToRun = () => {
    const questions = [
        {
            type: "list",
            name: "RUN",
            message: "The setup comes with examples of GitHub Acceptance Tests. Do you want to run a sample GitHub Tests to check your setup?",
            choices: ["Yes", "No"]
        }

    ];
    return inquirer.prompt(questions);
};

const success = (filepath) => {
    console.log(
        chalk.white.bgGreen.bold(`Done! Acceptance Tests Created at ${filepath}`)
    );
};


const run = async () => {
    // show script introduction
    init();

    // ask questions
    // ask questions
    const answers = await askQuestions();
    const { DESIRED_PROJECT_PATH, ACCEPTANCE_PATH } = answers;

    console.log('path: ', ACCEPTANCE_PATH);
    shell.cp('-R', 'packages/codeceptjs-cucumber/acceptance', ACCEPTANCE_PATH);
    shell.cp('-R', 'packages/codeceptjs-cucumber/codecept.conf.js', ACCEPTANCE_PATH);

    console.log('cd: ', DESIRED_PROJECT_PATH);
    shell.cd(DESIRED_PROJECT_PATH);

    if (shell.exec('yarn add codeceptjs-saucelabs codeceptjs-shared @wdio/selenium-standalone-service allure-commandline codeceptjs codeceptjs-selenium debug faker protractor rimraf should webdriverio deepmerge -D' ).code !== 0) {
        shell.echo('Error: Yarn Install failed');
        shell.exit(1);
    }

    const run = await askQuestionsToRun();
    const { RUN } = run;

    if(RUN === 'Yes') {
        if (shell.exec('./node_modules/.bin/codeceptjs run --config=./modules/codecept.conf.js --grep=@search_results' ).code !== 0) {
            shell.echo('Error: Execution failed');
            shell.exit(1);
        }
    }

    success(ACCEPTANCE_PATH);
    shell.exit(1);
};

run();

