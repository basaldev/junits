import yoriMae from '../yoriMae';

describe('yoriMae', () => {
  it('should return false with the same date values', () => {
    expect(yoriMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 16, 20))).toBe(false);
  });

  it('should return true with a future year', () => {
    expect(yoriMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2020, 4, 7, 13, 16, 20))).toBe(true);
  });

  it('should return true with a future month', () => {
    expect(yoriMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 5, 7, 13, 16, 20))).toBe(true);
  });

  it('should return true with a future day', () => {
    expect(yoriMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 8, 13, 16, 20))).toBe(true);
  });

  it('should return true with a future hour', () => {
    expect(yoriMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 14, 16, 20))).toBe(true);
  });

  it('should return true with a future minute', () => {
    expect(yoriMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 17, 20))).toBe(true);
  });

  it('should return true with a future second', () => {
    expect(yoriMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 16, 21))).toBe(true);
  });

  it('should return false with a past year', () => {
    expect(yoriMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2018, 4, 7, 13, 16, 20))).toBe(false);
  });

  it('should return false with a past month', () => {
    expect(yoriMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 3, 7, 13, 16, 20))).toBe(false);
  });

  it('should return false with a past day', () => {
    expect(yoriMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 6, 13, 16, 20))).toBe(false);
  });

  it('should return false with a past hour', () => {
    expect(yoriMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 12, 16, 20))).toBe(false);
  });

  it('should return false with a past minute', () => {
    expect(yoriMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 15, 20))).toBe(false);
  });

  it('should return false with a past second', () => {
    expect(yoriMae(new Date(2019, 4, 7, 13, 16, 20), new Date(2019, 4, 7, 13, 16, 19))).toBe(false);
  });
});
