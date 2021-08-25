const reverseString = require('./reverse-string');

test('reverse value of author is rohtua', () => {
  expect(reverseString('author')).toBe('rohtua');
});

test('reverse value of zain sadaqat is taqadas niaz', () => {
  expect(reverseString('zain sadaqat')).toBe('taqadas niaz');
});
