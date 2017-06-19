var _ = require('underscore');

/**
 * Converts a function that accepts params dictionary, to one, that has
 * default values for environment and domain.
 */
function wrapDefaults(wrapped){
  return function (params) {
    var art = require('../art');
    params = params || {};
    params = _.extend({
        environment: art.environment,
        domain: art.domain},
      params);

    return wrapped(params);
  };
}

module.exports = wrapDefaults;
