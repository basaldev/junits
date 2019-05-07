import noAida from '../noAida';

describe('noAida', () => {
  it('should return true with the same date values', () => {
    expect(noAida(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 16, 20))).toBe(true);
  });

  it('should return false with a past start year and a past end year', () => {
    expect(noAida(new Date(2019, 4, 7, 13, 16, 20), new Date(2017, 4, 7, 13, 16, 20), new Date(2018, 4, 7, 13, 16, 20))).toBe(false);
  });

  it('should return true with a past start year and the same end year', () => {
    expect(noAida(new Date(2019, 4, 7, 13, 16, 20), new Date(2018, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 16, 20))).toBe(true);
  });

  it('should return true with a past start year and a future end year', () => {
    expect(noAida(new Date(2019, 4, 7, 13, 16, 20), new Date(2018, 4, 7, 13, 16, 20), new Date(2020, 4, 7, 13, 16, 20))).toBe(true);
  });

  it('should return true with the same start year and a future end year', () => {
    expect(noAida(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 16, 20), new Date(2020, 4, 7, 13, 16, 20))).toBe(true);
  });

  it('should return false with a future start year and a future end year', () => {
    expect(noAida(new Date(2019, 4, 7, 13, 16, 20), new Date(2020, 4, 7, 13, 16, 20), new Date(2021, 4, 7, 13, 16, 20))).toBe(false);
  });
});
