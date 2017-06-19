var cbToPromise = require('../../cbToPromise');
var fhc = require('fh-fhc');

module.exports = {
  /**
   * @param {string}           id           Form Template ID To Import
   * @param {string}           name         New Name For Imported Form
   * @param {string|undefined} description  Description For Imported Form
   */
  import: cbToPromise(fhc.appforms.templates.forms.import),

  list: cbToPromise(fhc.appforms.templates.forms.list),

  /**
   * @param {string} id  Form Template ID
   */
  read: cbToPromise(fhc.appforms.templates.forms.read)
};

