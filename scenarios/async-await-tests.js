const { sumAsync, subtractAsync } = require('../math');

const expect = actual => ({
  toBe: expected => {
    if (actual !== expected) {
      throw new Error(`${actual} is not equal to ${expected}`);
    }
  }
});

const test = async (title, callback) => {
  try {
    await callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
};

test('sumAsync adds numbers asynchronously', async () => {
  const result = await sumAsync(6, 4);
  const expected = 10;
  expect(result).toBe(expected);
});

test('subtractAsync subtracts numbers asynchronously', async () => {
  const result = await subtractAsync(9, 2);
  const expected = 7;
  expect(result).toBe(expected);
});
