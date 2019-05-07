import tsuki from '../tsuki';

describe('tsuki', () => {
  it('should return "tsuki"', () => {
    expect(tsuki(new Date(2019, 4, 7, 13, 16, 20))).toBe('5月');
  });

  it('should apply custom unit', () => {
    expect(tsuki(new Date(2019, 4, 7, 13, 16, 20), ' month')).toBe('5 month');
  });
});
