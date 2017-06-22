var cbToPromise = require('./cbToPromise');
var fhc = require('fh-fhc');

module.exports = {
  pull: cbToPromise(function(appId, cb) {
    fhc.git({ _: ['pull', appId] }, cb);
  })
};
