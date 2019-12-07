const { sum, subtract } = require('../math');

let result, expected;

result = sum(2, 2);
expected = 4;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(7, 2);
expected = 5;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
