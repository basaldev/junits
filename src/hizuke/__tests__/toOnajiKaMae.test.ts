import toOnajiKaMae from '../toOnajiKaMae';

describe('toOnajiKaMae', () => {
  it('should return true with the same date values', () => {
    expect(toOnajiKaMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 16, 20))).toBe(true);
  });

  it('should return true with a future year', () => {
    expect(toOnajiKaMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2020, 4, 7, 13, 16, 20))).toBe(true);
  });

  it('should return true with a future month', () => {
    expect(toOnajiKaMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 5, 7, 13, 16, 20))).toBe(true);
  });

  it('should return true with a future day', () => {
    expect(toOnajiKaMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 8, 13, 16, 20))).toBe(true);
  });

  it('should return true with a future hour', () => {
    expect(toOnajiKaMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 14, 16, 20))).toBe(true);
  });

  it('should return true with a future minute', () => {
    expect(toOnajiKaMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 17, 20))).toBe(true);
  });

  it('should return true with a future second', () => {
    expect(toOnajiKaMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 16, 21))).toBe(true);
  });

  it('should return false with a past year', () => {
    expect(toOnajiKaMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2018, 4, 7, 13, 16, 20))).toBe(false);
  });

  it('should return false with a past month', () => {
    expect(toOnajiKaMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 3, 7, 13, 16, 20))).toBe(false);
  });

  it('should return false with a past day', () => {
    expect(toOnajiKaMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 6, 13, 16, 20))).toBe(false);
  });

  it('should return false with a past hour', () => {
    expect(toOnajiKaMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 12, 16, 20))).toBe(false);
  });

  it('should return false with a past minute', () => {
    expect(toOnajiKaMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 15, 20))).toBe(false);
  });

  it('should return false with a past second', () => {
    expect(toOnajiKaMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 16, 19))).toBe(false);
  });
});
