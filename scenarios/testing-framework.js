const { sum, subtract } = require('../math');

const test = (title, callback) => {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
};

const expect = actual => ({
  toBe: expected => {
    if (actual !== expected) {
      throw new Error(`${actual} is not equal to ${expected}`);
    }
  }
});

test('sum adds numbers', () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('subtract subtracts numbers', () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
