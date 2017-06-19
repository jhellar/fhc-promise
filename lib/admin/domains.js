/**
 * Created by pstanko on 9/7/16.
 */

var cbToPromise = require('../cbToPromise');
var fhc = require('fh-fhc');

module.exports = {
  create: cbToPromise(function(params, cb) {
    fhc.admin.domains({_: ["create", params.name, params.type],
                        theme: params.theme,
                        parent: params.parent}, cb);
  })
};
