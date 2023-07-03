// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

interface TestingData {
  a: number | unknown;
  b: number;
  action: Action | unknown;
  expected: number | null;
}

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 10, b: 8, action: Action.Subtract, expected: 2 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 21, b: 7, action: Action.Divide, expected: 3 },
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  { a: 3, b: 2, action: 'x', expected: null },
  { a: 'I', b: 2, action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'Expected result should be equal to expected in the next object %s',
    ({ a, b, action, expected }: TestingData) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});
