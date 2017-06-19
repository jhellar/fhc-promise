var cbToPromise = require('../cbToPromise');
var fhc = require('fh-fhc');

module.exports = {
  /**
   * @param {string} id  ID Of Form To Clone
   */
  clone: cbToPromise(fhc.appforms.forms.clone),

  /**
   * @param {string} formfile  A Path To A File Containing A Valid JSON Definition Of A Form
   */
  create: cbToPromise(fhc.appforms.forms.create),

  /**
   * @param {string} id  ID Of The Form To Remove
   */
  delete: cbToPromise(fhc.appforms.forms.delete),

  /**
   * @param {string} file  Output zip file containing the forms export
   */
  export: cbToPromise(fhc.appforms.forms.export),

  /**
   * @param {string} file  Path to a file
   */
  import: cbToPromise(fhc.appforms.forms.import),

  list: cbToPromise(fhc.appforms.forms.list),

  /**
   * @param {string} id  ID Of Form To Read
   */
  read: cbToPromise(fhc.appforms.forms.read),

  /**
   * @param {string} id        ID Of The Form To Update
   * @param {string} formfile  A Path To A File Containing A Valid JSON Definition Of A Form
   */
  update: cbToPromise(fhc.appforms.forms.update)
};

