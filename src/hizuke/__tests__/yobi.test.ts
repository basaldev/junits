import yobi from '../yobi';

describe('yobi', () => {
  it('should return "yobi"', () => {
    expect(yobi(new Date(2019, 4, 7, 13, 16, 20))).toBe('火曜日');
  });

  it('should apply custom unit', () => {
    expect(yobi(new Date(2019, 4, 7, 13, 16, 20), ' day')).toBe('火 day');
  });
});
