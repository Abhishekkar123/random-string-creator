# Random String Creator

A utility library for generating random strings, IDs, emails and OTPs.

## Installation

You can install the package via npm:

```bash
npm install random-string-creator

## Usage

```javascript
const { generatorRandomString, generateId, generateEmail, generateSalary, generateOTP } = require('random-string-creator');

console.log(generatorRandomString(10));
console.log(generateId(10));
console.log(generateEmail());
console.log(generateOTP(6));

