var cbToPromise = require('./cbToPromise');
var fhc = require('fh-fhc');

module.exports = {
  ssh: {
    add: cbToPromise(fhc.keys.ssh.add)
  }
};