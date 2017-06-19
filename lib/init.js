var fh = require('fh-fhc');
var cbToPromise = require('./cbToPromise');

function fhcInit(config, cb) {
  var cfg = {
    loglevel: 'error',
    json: true,
    feedhenry: config.host,
    user: config.username,
    inmemoryconfig: true
  };

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
        return cb();
      });
    });
  });
}

module.exports = cbToPromise(fhcInit);