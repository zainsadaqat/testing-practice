const stringLength = require('./string-length');

test('string length greater than 1', () => {
  expect(stringLength('zain')).toBe(4);
});

test('string length less than 10', () => {
  expect(stringLength('zain dev')).toBeLessThan(10);
});

test('string length greater than 1', () => {
  expect(stringLength('zain')).not.toBe(5);
});
