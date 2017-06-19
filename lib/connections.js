var cbToPromise = require('./cbToPromise');
var fhc = require('fh-fhc');

module.exports = {
  read: cbToPromise(function(params, cb) {
    fhc.connections({_:['read', params.projectId, params.connectionId]}, cb);
  }),
  update: cbToPromise(function(params, cb) {
    fhc.connections({_:['update', params.projectId, params.connectionId, params.cloudAppId, '--env='+params.env]}, cb);
  }),
  list: cbToPromise(function(params, cb) {
    fhc.connections({_:['list', params.projectId]}, cb);
  })
};
