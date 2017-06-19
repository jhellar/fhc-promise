var cbToPromise = require('../../cbToPromise');
var fhc = require('fh-fhc');

module.exports = {
  /**
   * @param {string} environment  ID Of Environment The Submission Is Located In
   * @param {string} id           ID Of Submission Containing The File
   * @param {string} fileid       ID Of File To Upload
   * @param {string} fieldid      ID Of Field The File Is Being Added To
   * @param {string} file         Path To File To Upload
   */
  addFile: cbToPromise(fhc.appforms.environments.submissions.addfile),

  /**
   * @param {string} environment  Environment Id
   * @param {string} id           Submission Id
   */
  complete: cbToPromise(fhc.appforms.environments.submissions.complete),

  /**
   * @param {string}           environment     Environment Id
   * @param {string}           submissiondata  Path To JSON Submission Data
   * @param {string|undefined} projectid       Project Guid To Associate The Submission With
   */
  create: cbToPromise(fhc.appforms.environments.submissions.create),

  /**
   * @param {string}           environment  ID Of Environment To Export Submissions From
   * @param {string}           output       File To Download Zip File To. Must Have A .zip Extension.
   * @param {string}           fieldHeader  Headers To Use In The Exported CSV Files. Can Either Be name or fieldCode
   * @param {string|undefined} formId       ID Of Form To Filter Submissions By
   * @param {string|undefined} projectId    Project GUID To Filter Submissions By
   */
  exportCsv: cbToPromise(fhc.appforms.environments.submissions.exportcsv),

  /**
   * @param {string} environment  ID Of Environment The Submission Is Located In
   * @param {string} id           ID Of Submission To Export
   * @param {string} output       Path To File To Export Submission To. Must Have A .pdf Extension.
   */
  exportPdf: cbToPromise(fhc.appforms.environments.submissions.exportpdf),

  /**
   * @param {string}           environment  Environment ID
   * @param {string|undefined} projectid    Filter By Project ID
   * @param {string|undefined} formid       Filter By Form ID
   */
  filter: cbToPromise(fhc.appforms.environments.submissions.filter),

  /**
   * @param {string} environment  ID Of Environment The Submission Is Located In
   * @param {string} id           ID Of Submission Containing The File
   * @param {string} fileid       ID Of File To Download
   * @param {string} output       Path To Output Downloaded File To
   */
  getFile: cbToPromise(fhc.appforms.environments.submissions.getfile),

  /**
   * @param {string} environment  ID Of Environment To List Forms
   */
  list: cbToPromise(fhc.appforms.environments.submissions.list),

  /**
   * @param {string} environment  ID Of Environment To List Forms
   * @param {string} id           Submission ID
   */
  read: cbToPromise(fhc.appforms.environments.submissions.read),

  /**
   * @param {string} environment     Environment Id
   * @param {string} submissiondata  Path To JSON Submission Data
   * @param {string} id              Submission ID
   */
  update: cbToPromise(fhc.appforms.environments.submissions.update),

  /**
   * @param {string} environment  ID Of Environment The Submission Is Located In
   * @param {string} id           ID Of Submission Containing The File
   * @param {string} fileid       ID Of File To Upload
   * @param {string} fieldid      ID Of Field The File Is Being Added To
   * @param {string} file         Path To File To Upload
   */
  updateFile: cbToPromise(fhc.appforms.environments.submissions.updatefile)
};

