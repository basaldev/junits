import toOnaji from '../toOnaji';

describe('toOnaji', () => {
  it('should return true with the same date values', () => {
    expect(toOnaji(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 16, 20))).toBe(true);
  });

  it('should return false with a future year', () => {
    expect(toOnaji(new Date(2019, 4, 7, 13, 16, 20), new Date(2020, 4, 7, 13, 16, 20))).toBe(false);
  });

  it('should return false with a future month', () => {
    expect(toOnaji(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 5, 7, 13, 16, 20))).toBe(false);
  });

  it('should return false with a future day', () => {
    expect(toOnaji(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 8, 13, 16, 20))).toBe(false);
  });

  it('should return false with a future hour', () => {
    expect(toOnaji(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 14, 16, 20))).toBe(false);
  });

  it('should return false with a future minute', () => {
    expect(toOnaji(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 17, 20))).toBe(false);
  });

  it('should return false with a future second', () => {
    expect(toOnaji(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 16, 21))).toBe(false);
  });

  it('should return false with a past year', () => {
    expect(toOnaji(new Date(2019, 4, 7, 13, 16, 20), new Date(2018, 4, 7, 13, 16, 20))).toBe(false);
  });

  it('should return false with a past month', () => {
    expect(toOnaji(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 3, 7, 13, 16, 20))).toBe(false);
  });

  it('should return false with a past day', () => {
    expect(toOnaji(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 6, 13, 16, 20))).toBe(false);
  });

  it('should return false with a past hour', () => {
    expect(toOnaji(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 12, 16, 20))).toBe(false);
  });

  it('should return false with a past minute', () => {
    expect(toOnaji(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 15, 20))).toBe(false);
  });

  it('should return false with a past second', () => {
    expect(toOnaji(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 16, 19))).toBe(false);
  });
});
