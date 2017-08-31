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
async function tryCatch(timeout, func) {
  let result;
  let recordedError;
  let originalListener;

  try {
    result = await new Promise(function(resolve, reject) {
      originalListener = replaceListener(reject);

      func()
        .then(resolve)
        .catch(reject);

      setTimeout(() => {
        reject('Operation timed out');
      }, timeout);
    });
  } catch (error) {
    replaceListener(originalListener);
    throw error;
  }

  replaceListener(originalListener);
  return result;
}

function replaceListener(listener) {
  const originalListener = process.listeners('uncaughtException').pop();
  if (originalListener) {
    process.removeListener('uncaughtException', originalListener);
  }
  if (listener) {
    process.on('uncaughtException', listener);
  }
  return originalListener;
}

module.exports = tryCatch;