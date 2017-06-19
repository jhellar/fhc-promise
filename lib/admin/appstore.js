/**
 * Created by pstanko on 9/7/16.
 */
var cbToPromise = require('../cbToPromise');
var fhc = require('fh-fhc');

module.exports = {
  read: cbToPromise(function(projectId, cb) {
    fhc["admin-appstore"]({_:['read', projectId]}, cb);
  }),
  update: cbToPromise(function(params, cb) {
    fhc["admin-appstore"]({_:['update', params.name, params.description, params.appId1]}, cb);
  }),
  updateField: cbToPromise(function(fieldName, fieldValue, cb) {
    fhc["admin-appstore"]({_:['updatefield', fieldName, fieldValue]}, cb);
  }),
  addItem: cbToPromise(function(itemGuid, cb) {
    fhc["admin-appstore"]({_: ['additem', itemGuid]}, cb);
  }),

  removeItem: cbToPromise(function(itemGuid, cb) {
    fhc["admin-appstore"]({_: ['removeitem', itemGuid]}, cb);
  }),

  listItems: cbToPromise(function(params, cb) {
    fhc.projects({_:['listitems']}, cb);
  }),

  addPolicy: cbToPromise(function(policyId, cb) {
    fhc["admin-appstore"]({_: ['addpolicy', policyId]}, cb);
  }),

  removePolicy: cbToPromise(function(policyId, cb) {
    fhc["admin-appstore"]({_: ['removepolicy', policyId]}, cb);
  }),

  listPolicies: cbToPromise(function(policyId, cb) {
    fhc.projects({_:['listpolicies']}, cb);
  })
};

