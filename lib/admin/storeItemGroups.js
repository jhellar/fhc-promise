/**
 * Created by pstanko on 9/7/16.
 */


var cbToPromise = require('../cbToPromise');
var fhc = require('fh-fhc');



module.exports = {
  list: cbToPromise(function(cb) {
    fhc["admin-storeitemgroups"]({_: ["list"]}, cb);
  }),
  create: cbToPromise(function(groupName, groupDesc, cb) {
    fhc["admin-storeitemgroups"]({_: ["create", groupName, groupDesc || ""]}, cb);
  }),
  delete: cbToPromise(function(groupId, cb) {
    fhc["admin-storeitemgroups"]({_: ["delete", groupId]}, cb);
  }),
  read : cbToPromise(function(groupId, cb) {
    fhc["admin-storeitemgroups"]({_: ["read", groupId]}, cb);
  }),
  readByName: cbToPromise(function(groupName, cb) {
    fhc["admin-storeitemgroups"]({_: ["readbyname", groupName]}, cb);
  }),
  update: cbToPromise(function(groupId, groupName, groupDesc, cb) {
    fhc["admin-storeitemgroups"]({_: ["update", groupId, groupName, groupDesc || ""]}, cb);
  }),
  /**
   * @param userArray - Users' emails
   */
  addusers: cbToPromise(function(groupId, usersArray, cb) {
    fhc["admin-storeitemgroups"]({_: ["addusers", groupId].concat(usersArray)}, cb);
  }),

  removeusers: cbToPromise(function(groupId, usersArray, cb) {
    fhc["admin-storeitemgroups"]({_: ["removeusers", groupId].concat(usersArray)}, cb);
  }),
  addstoreitems: cbToPromise(function(groupId, storeItems, cb) {
    fhc["admin-storeitemgroups"]({_: ["addstoreitems", groupId].concat(storeItems)}, cb);
  }),
  removestoreitems: cbToPromise(function(groupId, storeItems, cb) {
    fhc["admin-storeitemgroups"]({_: ["removestoreitems", groupId].concat(storeItems)}, cb);
  })
};