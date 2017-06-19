/**
 * Created by pstanko on 9/7/16.
 */

var cbToPromise = require('../cbToPromise');
var fhc = require('fh-fhc');


/*
 * @param policyId
 * @param policyType - one of OAUTH1 | OAUTH2 | LDAP | OPENID | FEEDHENRY
 * @param config: is a json object corresponding to the policy type
 * @param checkUserExists - default false
 * @param checkUserApproved - default false
 */
function policyCreate(params, cb) {

  fhc["admin-policies"].create(
    params.policyId,
    params.policyType,
    params.config,
    params.checkUserExists || "false",
    params.checkUserApproved || "false", cb)
}

/*
 * @param policyGuid - policyGuid
 * @param policyId
 * @param policyType
 * @param config
 * @param checkUserExists
 * @param checkUserApproved
 */
function policyUpdate(params, cb) {

  fhc["admin-policies"].update(
    params.policyGuid,
    params.policyId,
    params.policyType,
    params.config,
    params.checkUserExists || "false",
    params.checkUserApproved || "false", cb);
}


module.exports = {
  create: cbToPromise(policyCreate),
  update: cbToPromise(policyUpdate),
  read: cbToPromise(function(policyId, cb) {
    fhc["admin-policies"].read(policyId, cb);
  }),

  list: cbToPromise(function (params,cb) {
    fhc["admin-policies"].list(cb);
  }),
  delete: cbToPromise(function(policyGuid, cb) {
    fhc["admin-policies"].deletePolicy(policyGuid, cb);
  }),
  users: cbToPromise(function(policyGuid, cb) {
    fhc["admin-policies"].users(policyGuid, cb);
  }),

  /*
   * @param usersArray - array of users
   */
  addUsers: cbToPromise(function(policyGuid, usersArray, cb) {
    fhc["admin-policies"]({_: ["addusers", policyGuid].concat(usersArray)}, cb);
  }),
  removeUsers: cbToPromise(function(policyGuid, usersArray, cb) {
    fhc["admin-policies"]({_: ["removeusers", policyGuid].concat(usersArray)}, cb);
  })
};