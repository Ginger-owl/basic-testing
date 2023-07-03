// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    return expect(simpleCalculator({ a: 1, b: 2, action: Action.Add })).toBe(3);
  });

  test('should subtract two numbers', () => {
    return expect(
      simpleCalculator({ a: 10, b: 8, action: Action.Subtract }),
    ).toBe(2);
  });

  test('should multiply two numbers', () => {
    return expect(
      simpleCalculator({ a: 3, b: 3, action: Action.Multiply }),
    ).toBe(9);
  });

  test('should divide two numbers', () => {
    return expect(
      simpleCalculator({ a: 21, b: 3, action: Action.Divide }),
    ).toBe(7);
  });

  test('should exponentiate two numbers', () => {
    return expect(
      simpleCalculator({ a: 2, b: 3, action: Action.Exponentiate }),
    ).toBe(8);
  });

  test('should return null for invalid action', () => {
    return expect(simpleCalculator({ a: 2, b: 3, action: '%' })).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    return expect(
      simpleCalculator({ a: 'I', b: 2, action: Action.Multiply }),
    ).toBe(null);
  });
});
