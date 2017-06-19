var cbToPromise = require('../cbToPromise');
var fhc = require('fh-fhc');

module.exports = {
  /**
   * @param {string} id  ID Of Theme To Clone
   */
  clone: cbToPromise(fhc.appforms.themes.clone),

  /**
   * @param {string} themefile  A Path To A File Containing A Valid JSON Definition Of A Theme
   */
  create: cbToPromise(fhc.appforms.themes.create),

  /**
   * @param {string} id  ID Of The Theme To Remove
   */
  delete: cbToPromise(fhc.appforms.themes.delete),

  list: cbToPromise(fhc.appforms.themes.list),

  /**
   * @param {string} id  ID Of Theme To Read
   */
  read: cbToPromise(fhc.appforms.themes.read),

  /**
   * @param {string} id         ID Of The Theme To Update
   * @param {string} themefile  A Path To A File Containing A Valid JSON Definition Of A Theme
   */
  update: cbToPromise(fhc.appforms.themes.update)
};
