var cbToPromise = require('../cbToPromise');
var fhc = require('fh-fhc');

module.exports = {
  /**
   * @param {string} name                Name of the data source to create
   * @param {string} serviceGuid         The ID of the service to associate with the data source
   * @param {string} endpoint            A valid path to the endpoint to be polled for data
   * @param {int}    refreshInterval     The time, in minutes, between data polling
   * @param {string} description         Description for the data source
   * @param {int}    numAuditLogEntries  Number of Audit Log entries to store
   */
  create: cbToPromise(fhc.appforms["data-sources"].create),

  list: cbToPromise(fhc.appforms["data-sources"].list),

  /**
   * @param {string} id  ID of the data source to read
   */
  read: cbToPromise(fhc.appforms["data-sources"].read),

  /**
   * @param {string} id  ID of the data source to remove
   */
  remove: cbToPromise(fhc.appforms["data-sources"].remove),

  /**
   * @param {string}           id                  ID Of The Data Source To Update
   * @param {string|undefined} name                Name of the data source to create
   * @param {string|undefined} serviceGuid         The ID of the service to associate with the data source
   * @param {string|undefined} endpoint            A valid path to the endpoint to be polled for data
   * @param {int|undefined}    refreshInterval     The time, in minutes, between data polling
   * @param {string|undefined} description         Description for the data source
   * @param {int|undefined}    numAuditLogEntries  Number of Audit Log entries to store
   */
  update: cbToPromise(fhc.appforms["data-sources"].update)
};

