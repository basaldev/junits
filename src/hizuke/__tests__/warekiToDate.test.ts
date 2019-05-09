import warekiToDate from '../warekiToDate';

describe('warekiToDate', () => {
  it('should throw an error with no args', () => {
    // @ts-ignore
    expect(() => warekiToDate()).toThrowError('"undefined"は元号アルファベットには存在しません。');
  });

  it('should throw an error without year', () => {
    // @ts-ignore
    expect(() => warekiToDate('M')).toThrowError('年は1以上を指定してください。');
  });

  it('should throw an error with year as 0', () => {
    expect(() => warekiToDate('M', 0)).toThrowError('年は1以上を指定してください。');
  });

  it('should throw an erro with unexist gengo alpha', () => {
    // @ts-ignore
    expect(() => warekiToDate('m', 1)).toThrowError('"m"は元号アルファベットには存在しません。');
  });

  it('should return a value with year', () => {
    expect(warekiToDate('M', 1)).toEqual(new Date(1868, 0));
  });

  it('should return a value with year and month', () => {
    expect(warekiToDate('M', 1, 1)).toEqual(new Date(1868, 0, 1));
  });

  it('should return a value with year, month and date', () => {
    expect(warekiToDate('M', 1, 1, 2)).toEqual(new Date(1868, 0, 2));
  });

  it('should return a value with year, month, date and hour', () => {
    expect(warekiToDate('M', 1, 1, 2, 3)).toEqual(new Date(1868, 0, 2, 3));
  });

  it('should return a value with year, month, date, hour and minute', () => {
    expect(warekiToDate('M', 1, 1, 2, 3, 4)).toEqual(new Date(1868, 0, 2, 3, 4));
  });

  it('should return a value with year, month, date, hour, minutes and second', () => {
    expect(warekiToDate('M', 1, 1, 2, 3, 4, 5)).toEqual(new Date(1868, 0, 2, 3, 4, 5));
  });

  describe('Meiji', () => {
    it('should return 1868 with "M" as gengo and "1" as year', () => {
      expect(warekiToDate('M', 1)).toEqual(new Date(1868, 0));
    });

    it('should return 1869 with "M" as gengo and "2" as year', () => {
      expect(warekiToDate('M', 2)).toEqual(new Date(1869, 0));
    });

    it('should return 1912 with "M" as gengo and "45" as year', () => {
      expect(warekiToDate('M', 45)).toEqual(new Date(1912, 0));
    });

    it('should return 1913 with "M" as gengo and "46" as year', () => {
      expect(warekiToDate('M', 46)).toEqual(new Date(1913, 0));
    });
  });

  describe('Taisho', () => {
    it('should return 1912 with "T" as gengo and "1" as year', () => {
      expect(warekiToDate('T', 1)).toEqual(new Date(1912, 0));
    });

    it('should return 1913 with "T" as gengo and "2" as year', () => {
      expect(warekiToDate('T', 2)).toEqual(new Date(1913, 0));
    });

    it('should return 1926 with "T" as gengo and "15" as year', () => {
      expect(warekiToDate('T', 15)).toEqual(new Date(1926, 0));
    });

    it('should return 1927 with "T" as gengo and "16" as year', () => {
      expect(warekiToDate('T', 16)).toEqual(new Date(1927, 0));
    });
  });

  describe('Showa', () => {
    it('should return 1926 with "S" as gengo and "1" as year', () => {
      expect(warekiToDate('S', 1)).toEqual(new Date(1926, 0));
    });

    it('should return 1927 with "S" as gengo and "2" as year', () => {
      expect(warekiToDate('S', 2)).toEqual(new Date(1927, 0));
    });

    it('should return 1989 with "S" as gengo and "64" as year', () => {
      expect(warekiToDate('S', 64)).toEqual(new Date(1989, 0));
    });

    it('should return 1990 with "S" as gengo and "65" as year', () => {
      expect(warekiToDate('S', 65)).toEqual(new Date(1990, 0));
    });
  });

  describe('Heisei', () => {
    it('should return 1989 with "H" as gengo and "1" as year', () => {
      expect(warekiToDate('H', 1)).toEqual(new Date(1989, 0));
    });

    it('should return 1990 with "H" as gengo and "2" as year', () => {
      expect(warekiToDate('H', 2)).toEqual(new Date(1990, 0));
    });

    it('should return 2019 with "H" as gengo and "31" as year', () => {
      expect(warekiToDate('H', 31)).toEqual(new Date(2019, 0));
    });

    it('should return 2020 with "H" as gengo and "32" as year', () => {
      expect(warekiToDate('H', 32)).toEqual(new Date(2020, 0));
    });
  });

  describe('Reiwa', () => {
    it('should return 2019 with "R" as gengo and "1" as year', () => {
      expect(warekiToDate('R', 1)).toEqual(new Date(2019, 0));
    });

    it('should return 2020 with "R" as gengo and "2" as year', () => {
      expect(warekiToDate('R', 2)).toEqual(new Date(2020, 0));
    });
  });
});
