import convertToDate from '../convertToDate';

describe('convertToDate', () => {
  it('should throw an error with invalid date format', () => {
    // @ts-ignore
    expect(() => convertToDate(0)).toThrowError('日付指定エラー');
  });

  it('should create new date instance with date instance', () => {
    expect(convertToDate(new Date(1986, 0))).toEqual(new Date(1986, 0));
  });

  it('should create new date instance with seireki array', () => {
    expect(convertToDate([1986])).toEqual(new Date(1986, 0));
  });

  it('should create new date instance with wareki array', () => {
    expect(convertToDate(['H', 1, 3])).toEqual(new Date(1989, 2));
  });
});
