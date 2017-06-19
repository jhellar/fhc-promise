var cbToPromise = require('./cbToPromise');
var fhc = require('fh-fhc');

module.exports = cbToPromise(fhc.call);
