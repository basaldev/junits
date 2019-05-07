import seireki from '../seireki';

describe('seireki', () => {
  it('should return "seireki"', () => {
    expect(seireki(new Date(2019, 4, 7, 13, 16, 20))).toBe('2019年');
  });

  it('should apply custom unit', () => {
    expect(seireki(new Date(2019, 4, 7, 13, 16, 20), ' year')).toBe('2019 year');
  });
});
