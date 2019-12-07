const { sum, subtract } = require('../math');

const expect = actual => ({
  toBe: expected => {
    if (actual !== expected) {
      throw new Error(`${actual} is not equal to ${expected}`);
    }
  }
});

let result, expected;

result = sum(2, 2);
expected = 4;
expect(result).toBe(expected);

result = subtract(7, 2);
expected = 5;
expect(result).toBe(expected);
