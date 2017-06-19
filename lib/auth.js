var cbToPromise = require('./cbToPromise');
var fhc = require('fh-fhc');

module.exports = cbToPromise(function(params, cb) {
  fhc.auth({_:[params.policyId, params.clientToken, "cordova", params.params]}, cb);
});
