var cbToPromise = require('../../cbToPromise');
var fhc = require('fh-fhc');

module.exports = {
  /**
   * @param {string}        environment  ID of environment to read data source data from
   * @param {string}        id           ID of the data source to read
   * @param {int|undefined} limit        Limit the number of results displayed
   */
  auditLogs: cbToPromise(fhc.appforms.environments["data-sources"]["audit-logs"]),

  /**
   * @param {string} environment  ID of environment to list data sources
   */
  list: cbToPromise(fhc.appforms.environments["data-sources"].list),

  /**
   * @param {string} environment  ID of environment to read data source data from
   * @param {string} id           ID of the data source to read
   */
  read: cbToPromise(fhc.appforms.environments["data-sources"].read),

  /**
   * @param {string} environment  ID of environment to refresh
   * @param {string} id           ID of the data source to refresh
   */
  refresh: cbToPromise(fhc.appforms.environments["data-sources"].refresh),

  /**
   * @param {string} environment      ID of environment to refresh
   * @param {string} name             Name of the data source to validate
   * @param {string} serviceGuid      The ID of the service to associate with the data source
   * @param {string} endpoint         A valid path to the endpoint to be polled for data
   * @param {int}    refreshInterval  The time, in minutes, between data polling
   * @param {string} description      Description for the data source
   */
  validate: cbToPromise(fhc.appforms.environments["data-sources"].validate)
};