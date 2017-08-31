var cbToPromise = require('./cbToPromise');
var fhc = require('fh-fhc');

module.exports = cbToPromise(function(params, cb) {
  fhc.secureendpoints({_: ['set-default', params.appGuid, params.security], env: params.env}, cb);
});
