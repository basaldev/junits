import tanYobi from '../tanYobi';

describe('tanYobi', () => {
  it('should return "tanYobi"', () => {
    expect(tanYobi(new Date(2019, 4, 7, 13, 16, 20))).toBe('（火）');
  });

  it('should apply custom unit', () => {
    expect(tanYobi(new Date(2019, 4, 7, 13, 16, 20), '[', ']')).toBe('[火]');
  });
});
