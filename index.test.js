const {
  arrayGenerator,
  numericArrayGenerator,
  validArray
} = require('./index');


console.log('Loading Tests...');

const case1 = numericArrayGenerator(5);
if (case1.length !== 5) {
  throw new Error('numericArrayGenerator should create a array with numbers upto arraysize specified.');
} else {
  console.info('numericArrayGenerator working as expected.');
}

const case2 = validArray(case1);
if (!case2) {
  throw new Error('validArray should parse case1 array as valid.');
} else {
  console.info('validArray working fine.');
}

console.log('Tests Successful...');