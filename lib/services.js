var cbToPromise = require('./cbToPromise');
var fhc = require('fh-fhc');

module.exports = {
  create: cbToPromise(function(params, cb) {
    fhc.services({_: ['create', params.projectName, params.template], 'env': 'none'}, cb);
  }),
  read: cbToPromise(function(projectId, cb) {
    fhc.services({_:['read', projectId]}, cb);
  }),
  update: cbToPromise(function(params, cb) {
    fhc.services({_:['update', params.projectId, params.key, params.value]}, cb);
  }),
  list: cbToPromise(function(params, cb) {
    fhc.services({_:['list']}, cb);
  }),
  delete: cbToPromise(function(projectId, cb) {
    fhc.services({_:['delete', projectId]}, cb);
  })
};
