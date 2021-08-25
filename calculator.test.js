const Calculator = require('./calculator');
const cal = new Calculator();

describe('Calculator: ', () => {
  test('add 5+2=7', () => {
    expect(cal.add(5, 2)).toBe(7);
  });

  test('subtract 10 from 30 is 20', () => {
    expect(cal.subtract(30, 10)).toBe(20);
  });

  test('multiply 5*4=20', () => {
    expect(cal.multiply(5, 4)).toBe(20);
  });

  test('Divide 20 / 10 is 2', () => {
    expect(cal.divide(20, 10)).toBe(2);
  });
});
