const mute = require('mute');
const unmute = mute();
const fhc = require('fh-fhc');
unmute();

module.exports = {
  init: require('./lib/init'),
  fhc
};
