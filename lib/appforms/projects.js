var cbToPromise = require('../cbToPromise');
var fhc = require('fh-fhc');

module.exports = {
  /**
   * @param {string} id     GUID Of The Form Project To Create                                  
   * @param {string} theme  The ID Of The Theme To Associate With The Form Project              
   * @param {string} forms  Comma-separated List Of Form IDs To Associate With The Form Project
   */
  create: cbToPromise(fhc.appforms.projects.create),

  list: cbToPromise(fhc.appforms.projects.list),

  /**
   * @param {string} id  GUID Of Form Project To Read
   */
  read: cbToPromise(fhc.appforms.projects.read),

  /**
   * @param {string}           id     GUID Of The Form Project To Update
   * @param {string|undefined} theme  The ID Of The Theme To Associate With The Form Project
   * @param {string|undefined} forms  Comma-separated List Of Form IDs To Associate With The Form Project
   */
  update: cbToPromise(fhc.appforms.projects.update)
};

