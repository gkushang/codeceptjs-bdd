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

const run = async () => {
    // show script introduction
    init();

    // ask questions
    // create the file
    // show success message
};

run();

