/**
 * Created by pstanko on 9/6/16.
 */


/*
 * List of attributes:
 *   - username
 *   - password
 *   - email
 *   - name
 *   - roles
 *   - authpolicies
 *   - invite
 *   - storeItemGroups
 */

var cbToPromise = require('../cbToPromise');
var fhc = require('fh-fhc');

var helper = {
  func: fhc["admin-users"],
  listOfParams: function(params) {
    var result = [];
    var listOfProp = ["username", "password", "email",
                      "name", "roles", "enabled",
                      "authpolicies", "invite", "storeItemGroup"];
    listOfProp.forEach(function(prop) {
      if (params.hasOwnProperty(prop)) {
        var val = params[prop];
        result.push(prop + "=" + val);
      }
    });
    return result;
  },
  args: function(what, params) {
    params = helper.listOfParams(params);
    params.unshift(what);
    return params;
  }
};

var userObject = {

  create: cbToPromise(function(params, cb) {
    var args = helper.args('create', params);
    fhc["admin-users"]({_:args}, cb);
  }),
  read: cbToPromise(function(username, cb) {
    fhc["admin-users"]({_: ['read', username]}, cb);
  }),
  update: cbToPromise(function(params, cb) {
    var args = helper.args('update', params);
    fhc["admin-users"]({_:args}, cb);
  }),
  list: cbToPromise(function(params, cb) {
    fhc["admin-users"]({_: ['list']}, cb);
  }),
  delete: cbToPromise(function(username, cb) {
    helper.func({_: ['delete', username]}, cb);
  }),
  enable: cbToPromise(function(username, cb) {
    helper.func({_: ['enable', username]}, cb);
  }),
  disable: cbToPromise(function(username, cb) {
    helper.func({_: ['disable', username]}, cb);
  }),
  import: cbToPromise(function(path, cb) {
    helper.func({_: ['import', path]}, cb);
  }),
  listDevices: cbToPromise(function(username, cb) {
    helper.func({_: ['listdevices', username]}, cb);
  }),
  listInstallApps: cbToPromise(function(username, cb) {
    helper.func({_: ['listinstallapps', username]}, cb);
  })
};


module.exports = userObject;

