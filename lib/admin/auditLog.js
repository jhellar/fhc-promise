/**
 * Created by pstanko on 9/7/16.
 */

/*
 listlogs [limit=<limit>] [storeItemGuid=<store item guid>] [storeItemBinaryType=<android|iphone>] [userId=<user guid>] [deviceId=<device guid>]

 params:
    - limit
    - storeItemGuid
    - storeItemBinaryType
    - userId
    - deviceId
 */


var cbToPromise = require('../cbToPromise');
var fhc = require('fh-fhc');


var helper = {
  func: fhc["admin-auditlog"],
  listOfParams: function(params) {
    var result = [];
    var listOfProp = ["limit", "storeItemGuid", "storeItemBinaryType",
                      "userId", "deviceId"];
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

module.exports = {
  listLogs: cbToPromise(function(params, cb) {
    var args = helper.args('listlogs', params);
    helper.func({_: args}, cb);
  })
};