
/**
 * ARRAY Utils
 */


/**
 * Generates an array of given size
 * @param arrSize
 */
exports.numericArrayGenerator = arrSize => {
  return new Array(arrSize)
    .join()
    .split(',')
    .map((item, index) => { return index; });
};

/**
 * Generates an array of given size and object (default is empty object)
 * @param arrSize
 * @param object
 * */
exports.arrayGenerator = (arrSize, object = {}) => {
  return exports.numericArrayGenerator(arrSize).map(function () { return object; });
};

/** Return true if the object is an array and has some items */
exports.validArray = arr => !!(arr && Array.isArray(arr) && arr.length);