const dotenv = require('dotenv');
dotenv.config({
    path: './acceptance/config/dev.codecept.env',
});
const configure = require('codeceptjs-shared').configure;

let conf = {
    name: 'Codeceptjs BDD Acceptance Tests',
};

console.log(configure.create(conf));
exports.config = configure.create(conf);
