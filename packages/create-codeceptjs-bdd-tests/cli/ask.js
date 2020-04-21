const inquirer = require('inquirer');

exports.aboutProjectPaths = () => {
    return inquirer.prompt([
        {
            name: 'PROJECT_NAME',
            type: 'input',
            default: 'Codeceptjs BDD Acceptance Tests',
            message: 'Enter name of your acceptance tests: ',
        },
        {
            name: 'ROOT_PATH',
            type: 'input',
            message:
                'Enter the Full PATH to your destination Root project (full path to /package.json): ',
        },
        {
            name: 'RELATIVE_PATH',
            type: 'input',
            default: 'tests',
            message: 'Enter a name for your tests folder: ',
        },
    ]);
};

exports.aboutSauceLabs = () => {
    return inquirer.prompt([
        {
            name: 'INTEGRATE_SAUCE_LABS',
            type: 'confirm',
            message: 'Do you want to integrate SauceLabs?',
        },
    ]);
};

exports.aboutSauceLabsAccount = () => {
    return inquirer.prompt([
        {
            name: 'SAUCE_USERNAME',
            type: 'input',
            message: 'Enter your Sauce Username: ',
        },
        {
            name: 'SAUCE_KEY',
            type: 'input',
            message: 'Enter your Sauce Access Key: ',
        },
    ]);
};

exports.aboutScenarioExeuctions = () => {
    return inquirer.prompt([
        {
            name: 'SHOULD_EXECUTE',
            type: 'confirm',
            message:
                'Do you want to run the Starter UI Automated Tests once setup is done?',
        },
    ]);
};

exports.aboutDriver = () => {
    return inquirer.prompt([
        {
            name: 'DRIVER',
            type: 'list',
            default: 'WebDriver',
            choices: ['WebDriver', 'Playwright'],
            message: 'Choose Default Driver',
        },
    ]);
};
