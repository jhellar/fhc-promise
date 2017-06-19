var Promise = require('es6-promise').Promise;
var _ = require('underscore');
var wrapDefaults = require('./wrapDefaults');

/**
 * Convert asynchronous callback function to promise returning function.
 * @param {function (params,cb)} function to be wrapped to return promise
 * @return {function(params) : Promise}
 *
 * Notes:
 * * if there is non-null err, promise gets rejected
 * * if there is error key in the result, promise gets rejected
 * * it the type of the result is Request, we will return the response or fail on err.
 * * function has .default method,
 *     that calls the function with globally set environment and domain
 */

function cbToPromise(cbApi) {
  if (!cbApi) {
    console.trace("Warning: Function could not be promisified. (Possibly used user doesn't have permission)");
    return undefined;
  }

  var promisefn = function (params) {

    return new Promise(function (resolve, reject) {
      cbApi(params, function (err, result) {
        if (err) {
          if (typeof err !== Error) {
            err = new Error(JSON.stringify(err));
          }
          Error.captureStackTrace(err, cbToPromise);
          return reject(err);
        }

        if (_.has(result, 'error')) {
          err = new Error(JSON.stringify(err));
          Error.captureStackTrace(err, cbToPromise);
          return reject(err);
        }
        return resolve(result);
      });
    });
  };

  promisefn.default = wrapDefaults(promisefn);
  return promisefn;

}

module.exports = cbToPromise;
