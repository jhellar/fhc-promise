var cbToPromise = require('../cbToPromise');
var fhc = require('fh-fhc');

/*
 Create:
 --id
 --label
 --target
 --token
 --autoDeployOnCreate
 --autoDeployOnUpdate
 */


module.exports = {
  create: cbToPromise(fhc.admin.environments.create),
  update: cbToPromise(fhc.admin.environments.update),
  list: cbToPromise(fhc.admin.environments.list),
  delete: cbToPromise(function(envId, cb) {
    fhc.admin.environments.delete({id: envId}, cb);
  }),
  read: cbToPromise(function(envId, cb) {
    fhc.admin.environments.read({id: envId}, cb);
  })
};
