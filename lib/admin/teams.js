var cbToPromise = require('../cbToPromise');
var fhc = require('fh-fhc');

module.exports = {

  create: cbToPromise(function (fileName, cb) {
    fhc.admin.teams.create({team: fileName}, cb);
  }),

  read: cbToPromise(function (teamId, cb) {
    fhc.admin.teams.read({id: teamId}, cb);
  }),

  addUser: cbToPromise(function (params, cb) {
    fhc.admin.teams.adduser({team: params.teamId, user: params.userId}, cb);
  }),

  removeUser: cbToPromise(function (params, cb) {
    fhc.admin.teams.removeuser({team: params.teamId, user: params.userId}, cb);
  }),

  list: cbToPromise(fhc.admin.teams.list),

  userTeams: cbToPromise(function (userId, cb) {
    fhc.admin.teams.userteams({user: userId}, cb);
  }),

  delete: cbToPromise(function (teamId, cb) {
    fhc.admin.teams.delete({id: teamId}, cb);
  })
};
