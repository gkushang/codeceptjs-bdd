const master = require('./lib/config/master/codecept.master.conf');
const configure = require('./lib/config/configure');
const Driver_commands = require.resolve(
  './lib/helpers/driver-commands.helper.js'
);

module.exports = {
  config: { master },
  helpers: { Driver_commands },
  configure
};
