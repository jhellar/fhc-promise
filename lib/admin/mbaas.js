var cbToPromise = require('../cbToPromise');
var fhc = require('fh-fhc');


/*
  Create prameters:
    - id
    - url
    - servicekey
    - username
    - password
    - decoupled
    - size
    - label
    - editable

  Bearer token:
    - url
    - username
    - password
    - mbaasid

  Update - same as Create but with additional parameter id

 */

module.exports = {
  create: cbToPromise(fhc.admin.mbaas.create),
  list: cbToPromise(fhc.admin.mbaas.list),
  bearertoken: cbToPromise(fhc.admin.mbaas.bearertoken),
  update: cbToPromise(fhc.admin.mbaas.update),

  delete: cbToPromise(function(mbaasId, cb) {
    fhc.admin.mbaas.delete({id: mbaasId}, cb);
  }),
  read: cbToPromise(function(mbaasId, cb) {
    fhc.admin.mbaas.read({id: mbaasId}, cb);
  })

};
