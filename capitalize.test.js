const capitalize = require('./capitalize');

test('capitalize "hello world" to "HelloWorld"', () => {
  expect(capitalize('hello world')).toBe('HelloWorld');
});

test('capitalize "zain sadaqat" to "HelloWorld"', () => {
  expect(capitalize('zain sadaqat')).toBe('ZainSadaqat');
});
