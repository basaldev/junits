import seirekiToDate from '../seirekiToDate';

describe('seirekiToDate', () => {
  it('should throw an error with no args', () => {
    // @ts-ignore
    expect(() => seirekiToDate()).toThrowError('年は1以上を指定してください。');
  });

  it('should return an error with year', () => {
    expect(seirekiToDate(1868)).toEqual(new Date(1868, 0));
  });

  it('should return an error with year and month', () => {
    expect(seirekiToDate(1868, 1)).toEqual(new Date(1868, 0));
  });

  it('should return an error with year, month and date', () => {
    expect(seirekiToDate(1868, 1, 2)).toEqual(new Date(1868, 0, 2));
  });

  it('should return an error with year, month, date and hour', () => {
    expect(seirekiToDate(1868, 1, 2, 3)).toEqual(new Date(1868, 0, 2, 3));
  });

  it('should return an error with year, month, date, hour and minute', () => {
    expect(seirekiToDate(1868, 1, 2, 3, 4)).toEqual(new Date(1868, 0, 2, 3, 4));
  });

  it('should return an error with year, month, date, hour, minutes and second', () => {
    expect(seirekiToDate(1868, 1, 2, 3, 4, 5)).toEqual(new Date(1868, 0, 2, 3, 4, 5));
  });
});
