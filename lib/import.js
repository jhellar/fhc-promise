var cbToPromise = require('./cbToPromise');
var fhc = require('fh-fhc');

module.exports = {
    // fhc import <project-id> <app-title> <app-template-type> --env=none
    bare: cbToPromise(function (params, cb) {
        fhc.import({_: [params.projectId, params.appTitle, params.template], 'env': 'none'}, cb);
    }),
    // fhc import <project-id> <app-title> <app-template-type> <zip-file> --env=none
    zip: cbToPromise(function (params, cb) {
        fhc.import({_: [params.projectId, params.appTitle, params.template, params.zipFile], 'env': 'none'}, cb);
    }),
    // fhc import <project-id> <app-title> <app-template-type> <git-repo.git> --env=none
    git: cbToPromise(function (params, cb) {
        fhc.import({_: [params.projectId, params.appTitle, params.template, params.gitRepo], 'env': 'none'}, cb);
    })
};