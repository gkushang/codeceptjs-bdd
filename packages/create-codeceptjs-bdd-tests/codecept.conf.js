const dotenv = require('dotenv');
dotenv.config({
    path: './acceptance/config/dev.codecept.env',
});
const configure = require('codeceptjs-shared').configure;

let conf = {
    name: 'Codeceptjs BDD Acceptance Tests',
    // add more configuration as required
};

exports.config = configure.create(conf);
