var cbToPromise = require('../../cbToPromise');
var fhc = require('fh-fhc');

module.exports = {
  /**
   * @param {string} id           ID Of Form To Update
   * @param {string} environment  ID Of Environment To Copy Form From
   */
  copyToCore: cbToPromise(fhc.appforms.environments.forms.copytocore),

  /**
   * @param {string} id           ID Of Form To Deploy
   * @param {string} environment  ID Of Environment To Deploy To
   */
  deploy: cbToPromise(fhc.appforms.environments.forms.deploy),

  lifecycle: cbToPromise(fhc.appforms.environments.forms.lifecycle),

  /**
   * @param {string} environment  ID Of Environment To List Forms
   */
  list: cbToPromise(fhc.appforms.environments.forms.list),

  /**
   * @param {string} id    ID Of Form To Promote
   * @param {string} from  ID Of Environment To Promote Form From
   * @param {string} to    ID Of Environment To Promote Form To
   */
  promote: cbToPromise(fhc.appforms.environments.forms.promote),

  /**
   * @param {string} id           ID Of Form To Read
   * @param {string} environment  Environment To Read Form From
   */
  read: cbToPromise(fhc.appforms.environments.forms.read),

  /**
   * @param {string} id           ID Of Form To Undeploy
   * @param {string} environment  ID Of Environment To Undeploy Form From
   */
  undeploy: cbToPromise(fhc.appforms.environments.forms.undeploy),

  /**
   * @param {string} id           ID Of Form To Update
   * @param {string} environment  ID Of Environment To List Forms
   * @param {string} formfile     Path To Form JSON File
   */
  update: cbToPromise(fhc.appforms.environments.forms.update)
};

