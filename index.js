/**
 * ARRAY Utils
 */

/**
 * Generates an array of sequential integers [0, 1, 2, ..., arrSize-1]
 * @param {number} arrSize - Non-negative integer
 * @returns {number[]}
 */
exports.numericArrayGenerator = arrSize => {
  return Array.from({ length: arrSize }, (_, i) => i);
};

/**
 * Generates an array of given size filled with shallow copies of object.
 * Beware: only shallow copy — nested objects still share references.
 * @param {number} arrSize - Non-negative integer
 * @param {object} object - Object to shallow-copy into each slot (default: {})
 * @returns {object[]}
 */
exports.arrayGenerator = (arrSize, object = {}) => {
  return Array.from({ length: arrSize }, () => ({ ...object }));
};

/**
 * Returns true if the input is a non-empty array
 * @param {*} arr
 * @returns {boolean}
 */
exports.validArray = arr => !!(arr && Array.isArray(arr) && arr.length);