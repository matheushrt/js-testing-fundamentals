const { sumAsync, subtractAsync } = require('../math');

test('sumAsync adds numbers asynchronously', async () => {
  const result = await sumAsync(3, 2);
  const expected = 5;
  expect(result).toBe(expected);
});

test('subtractAsync subtracts numbers asynchronously', async () => {
  const result = await subtractAsync(4, 2);
  const expected = 2;
  expect(result).toBe(expected);
});
