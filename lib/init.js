var fh = require('fh-fhc');
var cbToPromise = require('./cbToPromise');
var fhc;

/* Usage:
fhcInit(config.target.core_config)
  .then(function(fhc) {
    fhc.XXX();
  });
*/
function fhcInit(config, cb) {
  var cfg = {
    loglevel: 'error',
    json: true,
    feedhenry: config.host,
    user: config.username,
    inmemoryconfig: true
  };

  if(fhc){
    fhc = require('./index');
    return cb(undefined, fhc); // return no error and promisified fhc
  }

  fh.load(cfg, function(err) {
    if (err) {
      return cb('Failed to Load FHC Config');
    }

    fh.target({_:[config.host]}, function(err) {
      if (err) {
        return cb('Failed to target');
      }
      fh.login({_:[config.username, config.password]}, function(err){
        if(err){
          return cb(err);
        }
        fhc = require('./index');
        return cb(undefined, fhc); // return no error and promisified fhc
      });
    });
  });
}

module.exports = cbToPromise(fhcInit);