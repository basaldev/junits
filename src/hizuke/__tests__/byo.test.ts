import byo from '../byo';

describe('byo', () => {
  it('should return "byo"', () => {
    expect(byo(new Date(2019, 4, 7, 13, 16, 20))).toBe('20秒');
  });

  it('should apply custom unit', () => {
    expect(byo(new Date(2019, 4, 7, 13, 16, 20), ' seconds')).toBe('20 seconds');
  });
});
