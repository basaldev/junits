import yoriAto from '../yoriAto';

describe('yoriAto', () => {
  it('should return false with the same date values', () => {
    expect(yoriAto(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 16, 20))).toBe(false);
  });

  it('should return false with a future year', () => {
    expect(yoriAto(new Date(2019, 4, 7, 13, 16, 20), new Date(2020, 4, 7, 13, 16, 20))).toBe(false);
  });

  it('should return false with a future month', () => {
    expect(yoriAto(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 5, 7, 13, 16, 20))).toBe(false);
  });

  it('should return false with a future day', () => {
    expect(yoriAto(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 8, 13, 16, 20))).toBe(false);
  });

  it('should return false with a future hour', () => {
    expect(yoriAto(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 14, 16, 20))).toBe(false);
  });

  it('should return false with a future minute', () => {
    expect(yoriAto(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 17, 20))).toBe(false);
  });

  it('should return false with a future second', () => {
    expect(yoriAto(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 16, 21))).toBe(false);
  });

  it('should return true with a past year', () => {
    expect(yoriAto(new Date(2019, 4, 7, 13, 16, 20), new Date(2018, 4, 7, 13, 16, 20))).toBe(true);
  });

  it('should return true with a past month', () => {
    expect(yoriAto(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 3, 7, 13, 16, 20))).toBe(true);
  });

  it('should return true with a past day', () => {
    expect(yoriAto(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 6, 13, 16, 20))).toBe(true);
  });

  it('should return true with a past hour', () => {
    expect(yoriAto(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 12, 16, 20))).toBe(true);
  });

  it('should return true with a past minute', () => {
    expect(yoriAto(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 15, 20))).toBe(true);
  });

  it('should return true with a past second', () => {
    expect(yoriAto(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 16, 19))).toBe(true);
  });
});
