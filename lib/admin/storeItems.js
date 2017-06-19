/**
 * Created by pstanko on 9/7/16.
 */


var cbToPromise = require('../cbToPromise');
var fhc = require('fh-fhc');


var helper = {
  func: fhc["admin-storeitems"],
  listOfParams: function (params) {
    var result = [];
    var listOfProp = ["description", "authToken", "restrictToGroups"];

    listOfProp.forEach(function (prop) {
      if (params.hasOwnProperty(prop)) {
        var val = params[prop];
        result.push(prop + "=" + val);
      }
    });
    return result;
  },
  args: function (what, params) {
    params = helper.listOfParams(params);
    params.unshift(what);
    return params;
  }
};


module.exports = {
  list: cbToPromise(function(params, cb) {
    fhc["admin-storeitems"]({_:['list']}, cb);
  }),
  create: cbToPromise(function (opts, cb) {
    // var args = helper.listOfParams(opts.params);
    fhc["admin-storeitems"]({_: ["create", opts.name]}, cb);
  }),
  delete: cbToPromise(function (itemGuid, cb) {
    fhc["admin-storeitems"]({_: ["delete", itemGuid]}, cb);
  }),
  read: cbToPromise(function (itemGuid, cb) {
    fhc["admin-storeitems"]({_: ["read", itemGuid]}, cb);
  }),
  update: cbToPromise(function (params, cb) {

    var args = ["update",
      params.itemGuid,
      params.name,
      params.description,
      params.authToken,
      params.restrictToGroups
    ];
    fhc["admin-storeitems"]({_: args}, cb);

  }),
  uploadIcon: cbToPromise(function (itemGuid, path, cb) {
    fhc["admin-storeitems"]({_: ["uploadicon", itemGuid, path]}, cb);
  }),
  uploadBinary: cbToPromise(function (itemGuid, type, path, cb) {
    fhc["admin-storeitems"]({_: ["uploadbinary", itemGuid, type, path]}, cb);
  }),
  addPolicy: cbToPromise(function (itemGuid, policyId, cb) {
    fhc["admin-storeitems"]({_: ["addpolicy", itemGuid, policyId]}, cb);
  }),
  removePolicy: cbToPromise(function (itemGuid, policyId, cb) {
    fhc["admin-storeitems"]({_: ["removepolicy", itemGuid, policyId]}, cb);
  }),
  listPolicies: cbToPromise(function (itemGuid, cb) {
    fhc["admin-storeitems"]({_: ["listpolicies", itemGuid]}, cb);
  }),
  groupRestrict: cbToPromise(function (itemGuid, boolean, cb) {
    fhc["admin-storeitems"]({_: ["grouprestrict", itemGuid, boolean ? "true" : "false"]}, cb);
  }),
  addGroups: cbToPromise(function (itemGuid, groupsArray, cb) {
    fhc["admin-storeitems"]({_: ["addgroups", itemGuid].concat(groupsArray)}, cb);
  }),

  removeGroups: cbToPromise(function (itemGuid, groupsArray, cb) {
    fhc["admin-storeitems"]({_: ["removegroups", itemGuid].concat(groupsArray)}, cb);
  }),
  binaryVersions: cbToPromise(function (cb, itemGuid) {
    fhc["admin-storeitems"]({_: ["binaryversions", itemGuid]}, cb);
  })
};



