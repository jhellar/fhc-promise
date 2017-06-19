const mute = require('mute');

module.exports = async function(func) {
  let result;
  let unmute = mute();
  try {
    result = await func();
  } catch (error) {
    unmute();
    throw error;
  }
  unmute();
  return result;
}