import wareki from '../wareki';

describe('wareki', () => {
  it('should return full "wareki"', () => {
    expect(wareki(new Date(1868, 0, 1), 'full')).toBe('明治元年');
  });

  it('should return short "wareki"', () => {
    expect(wareki(new Date(1868, 0, 1), 'short')).toBe('明元年');
  });

  it('should return alpha "wareki"', () => {
    expect(wareki(new Date(1868, 0, 1), 'alpha')).toBe('M元年');
  });

  it('should apply custom unit', () => {
    expect(wareki(new Date(1868, 0, 1), 'full', 'year')).toBe('明治元year');
  });

  it('should return "明治元年" with 1868/1/1', () => {
    expect(wareki(new Date(1868, 0, 1))).toBe('明治元年');
  });

  it('should return "明治2年" with 1869/1/1', () => {
    expect(wareki(new Date(1869, 0, 1))).toBe('明治2年');
  });
});
