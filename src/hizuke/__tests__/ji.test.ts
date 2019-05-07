import ji from '../ji';

describe('ji', () => {
  it('should return "ji"', () => {
    expect(ji(new Date(2019, 4, 7, 13, 16, 20))).toBe('13時');
  });

  it('should apply custom unit', () => {
    expect(ji(new Date(2019, 4, 7, 13, 16, 20), ':')).toBe('13:');
  });
});
