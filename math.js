// sum is intentionally broken so the tests fail
const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

// async approach just for completeness
const sumAsync = async (a, b) => sum(a, b);
const subtractAsync = async (a, b) => subtract(a, b);

module.exports = { sum, subtract, sumAsync, subtractAsync };
