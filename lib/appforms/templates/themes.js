var cbToPromise = require('../../cbToPromise');
var fhc = require('fh-fhc');

module.exports = {
  /**
   * @param {string}           id           Theme Template ID To Import
   * @param {string}           name         New Name For Imported Theme
   * @param {string|undefined} description  Description For Imported Theme
   */
  import: cbToPromise(fhc.appforms.templates.themes.import),

  list: cbToPromise(fhc.appforms.templates.themes.list),

  /**
   * @param {string} id  Theme Template ID
   */
  read: cbToPromise(fhc.appforms.templates.themes.read)
};
