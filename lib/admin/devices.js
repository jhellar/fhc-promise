/**
 * Created by pstanko on 9/7/16.
 */


var cbToPromise = require('../cbToPromise');
var fhc = require('fh-fhc');

module.exports = {
  list: cbToPromise(function(cb) {
    fhc["admin-devices"]({_:['list']}, cb);
  }),
  read: cbToPromise(function(deviceId, cb) {
    fhc["admin-devices"]({_:['read', deviceId]}, cb);
  }),
  update: cbToPromise(function(deviceId, label, cb) {
    fhc["admin-devices"]({_:['update', deviceId, label]}, cb);
  }),
  enable: cbToPromise(function(deviceId, cb) {
    fhc["admin-devices"]({_:['enable', deviceId, "true"]}, cb);
  }),
  disable: cbToPromise(function(deviceId, cb) {
    fhc["admin-devices"]({_:['disable', deviceId, "false"]}, cb);
  }),
  purgeData: cbToPromise(function(deviceId, boolean, cb) {
    fhc["admin-devices"]({_:['read', deviceId, (boolean) ? "true" : "false"]}, cb);
  }),
  listUsers: cbToPromise(function(deviceId, cb) {
    fhc["admin-devices"]({_:['listusers', deviceId]}, cb);
  }),
  listApps: cbToPromise(function(deviceId, cb) {
    fhc["admin-devices"]({_:['listapps', deviceId]}, cb);
  })
};



