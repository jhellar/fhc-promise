var cbToPromise = require('./cbToPromise');
var fhc = require('fh-fhc');
const tryCatch = require('./try-catch');
const mute = require('./mute');

module.exports = {
  create: function(params) {
    const create = cbToPromise(function(params, cb) {
      fhc.projects({_: ['create', params.projectName, params.template], 'env': 'none'}, cb);
    });
    return tryCatch(60 * 1000, () => mute(() => create(params)));
  },
  read: cbToPromise(function(projectId, cb) {
    fhc.projects({_:['read', projectId]}, cb);
  }),
  update: cbToPromise(function(params, cb) {
    fhc.projects({_:['update', params.projectId, params.key, params.value]}, cb);
  }),
  list: cbToPromise(function(params, cb) {
    fhc.projects({_:['list']}, cb);
  }),
  delete: cbToPromise(function(projectId, cb) {
    fhc.projects({_:['delete', projectId]}, cb);
  }),
  clone: cbToPromise(function(projectId, cb) {
    fhc.projects({_:['clone', projectId]}, cb);
  })
};
