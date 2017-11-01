var cbToPromise = require('./cbToPromise');
var fhc = require('fh-fhc');

module.exports = {
  ssh: {
    add: cbToPromise(function(params, cb) {
      fhc.keys.ssh({_:['add', params.label, params.file]}, cb);
    })
  }
};