// load env variables - this should be the first line of config
const dotenv = require('dotenv-extended');
dotenv.config({
    path: './acceptance/config/codecept.env',
    defaults: './acceptance/config/codecept.dev.env'
});
// this is globally defined here, and used across all step definitions for BDD Assertions
const should = require('should');

const configure = require('codeceptjs-configure').configure;

let conf = {
    name: 'LWC Acceptance Tests with Selenium - BDD Feature Flavor'
    // add more configuration as required
};

exports.config = configure.create(conf);
