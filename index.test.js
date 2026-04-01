const {
  arrayGenerator,
  numericArrayGenerator,
  validArray
} = require('./index');

console.log('Loading Tests...');

// numericArrayGenerator - basic
const case1 = numericArrayGenerator(5);
if (case1.length !== 5) {
  throw new Error('numericArrayGenerator(5) should have length 5');
}
console.info('numericArrayGenerator(5) working as expected.');

// numericArrayGenerator - edge: size 0
const case1b = numericArrayGenerator(0);
if (case1b.length !== 0) {
  throw new Error('numericArrayGenerator(0) should return empty array');
}
console.info('numericArrayGenerator(0) returns empty array.');

// numericArrayGenerator - edge: size 1
const case1c = numericArrayGenerator(1);
if (case1c.length !== 1 || case1c[0] !== 0) {
  throw new Error('numericArrayGenerator(1) should return [0]');
}
console.info('numericArrayGenerator(1) returns [0].');

// arrayGenerator - basic
const case3 = arrayGenerator(3, { a: 1 });
if (case3.length !== 3) {
  throw new Error('arrayGenerator(3) should have length 3');
}
console.info('arrayGenerator(3) has correct length.');

// arrayGenerator - elements are independent shallow copies
case3[0].b = 99;
if (case3[1].b !== undefined) {
  throw new Error('arrayGenerator elements should be independent copies, not shared references');
}
console.info('arrayGenerator elements are independent shallow copies.');

// arrayGenerator - edge: size 0
const case3b = arrayGenerator(0);
if (case3b.length !== 0) {
  throw new Error('arrayGenerator(0) should return empty array');
}
console.info('arrayGenerator(0) returns empty array.');

// validArray
const case2 = validArray(case1);
if (!case2) {
  throw new Error('validArray should return true for non-empty array');
}
console.info('validArray returns true for valid array.');

// validArray - falsy cases
if (validArray([]) || validArray(null) || validArray(undefined) || validArray('string')) {
  throw new Error('validArray should return false for empty array, null, undefined, string');
}
console.info('validArray returns false for invalid inputs.');

console.log('Tests Successful...');
