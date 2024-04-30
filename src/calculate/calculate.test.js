import { calculateTax, calculateSuperannuation } from './calculate.js';

describe('calculateTax', () => {
  test('under first bracket', () => {
    expect(calculateTax(15000)).toBe(0);
  });

  test('first bracket', () => {
    expect(calculateTax(25000)).toBe(1292);
  });

  test('second bracket', () => {
    expect(calculateTax(50000)).toBe(7797);
  });

  test('third bracket', () => {
    expect(calculateTax(100000)).toBe(24497);
  });

  test('fourth bracket', () => {
    expect(calculateTax(200000)).toBe(63097);
  });
});

describe('calculateSuperannuation', () => {
  test('positive salary', () => {
    expect(calculateSuperannuation(50000)).toBe(5500);
  });

  test('0 salary', () => {
    expect(calculateSuperannuation(0)).toBe(0);
  });

  test('negative salary', () => {
    expect(calculateSuperannuation(-10000)).toBe(-1100);
  });
});
