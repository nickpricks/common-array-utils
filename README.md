# common-array-utils

Common JS Array based Utilities

## Install
```
npm i common-array-utils
```

## API

### numericArrayGenerator(size)
Creates a sequential integer array `[0, 1, 2, ..., size-1]`.
```js
const { numericArrayGenerator } = require('common-array-utils');
numericArrayGenerator(5); // [0, 1, 2, 3, 4]
numericArrayGenerator(0); // []
```

### arrayGenerator(size, object)
Creates an array of `size` filled with shallow copies of `object` (default `{}`).

> **Note:** Only shallow copies — nested objects still share references.

```js
const { arrayGenerator } = require('common-array-utils');
arrayGenerator(3);            // [{}, {}, {}]
arrayGenerator(2, { a: 1 });  // [{ a: 1 }, { a: 1 }]
```

### validArray(arr)
Returns `true` if the input is a non-empty array.
```js
const { validArray } = require('common-array-utils');
validArray([1, 2]);    // true
validArray([]);        // false
validArray(null);      // false
```

## Publishing

Pushing to `master` triggers automatic publish to npm via GitHub Actions (requires `NPM_TOKEN` secret). Only runs when `package.json` changes and skips if the version tag already exists.

## Tests
```
npm test
```