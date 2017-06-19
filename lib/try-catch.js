/**
 * Callback function to be performed.
 * @callback FuncCallback
 * @param {*} resolve
 * @param {*} reject
 */

/**
 * Run function catching any uncought errors.
 * @param {Number} timeout - Time after which to timeout if function is not finishing.
 * @param {FuncCallback} func - Function to perform.
 */
function tryCatch(timeout, func) {
  let recordedError;
  const originalListener = replaceListener();

  return new Promise(function(resolve, reject) {
    func()
      .then(resolve)
      .catch(reject);

    setTimeout(() => {
      reject('Operation timed out');
    }, timeout);
  })
  .then(() => {
    revertListener();
  })
  .catch(error => {
    revertListener();
    throw error;
  });

  function replaceListener() {
    const originalListener = process.listeners('uncaughtException').pop();
    process.removeListener('uncaughtException', originalListener);
    process.once('uncaughtException', error => {
      recordedError = error;
    });
    return originalListener;
  }

  function revertListener() {
    if (recordedError) {
      console.error(recordedError);
    } else {
      const customListener = process.listeners('uncaughtException').pop();
      process.removeListener('uncaughtException', customListener);
    }
    process.on('uncaughtException', originalListener);
  }
}

module.exports = tryCatch;