var cbToPromise = require('./cbToPromise');
var fhc = require('fh-fhc');
const mute = require('./mute');

module.exports = {
  create: cbToPromise(fhc.app.create),
  stage: function(params) {
    const deploy = cbToPromise(fhc.app.stage);
    return mute(() => deploy(params));
  },
  hosts: cbToPromise(fhc.app.hosts),
  read: cbToPromise(function(projectId, appId, cb) {
    fhc.app.read({ project: projectId, app: appId }, cb);
  }),
  list: cbToPromise(function(projectId, cb) {
    fhc.app.list({project: projectId}, cb);
  }),
  delete: cbToPromise(fhc.app.delete),
  start: cbToPromise(fhc.app.stage),
  stop: cbToPromise(fhc.app.stop),
  undeploy: cbToPromise(fhc.app.undeploy),
  act: cbToPromise(fhc.app.act),
  cloud: cbToPromise(fhc.app.cloud),
  endpoints: cbToPromise(fhc.app.endpoints),
  resources: cbToPromise(fhc.app.resources),
  logs: {
    delete: cbToPromise(fhc.app.logs.delete),
    get: cbToPromise(fhc.app.logs.get),
    list: cbToPromise(fhc.app.logs.list),
    tail: cbToPromise(fhc.app.logs.tail)
  }
};
