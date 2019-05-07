import wareki from '../wareki';

describe('wareki', () => {
  describe('Before Meiji', () => {
    it('should return seireki with the date before Meiji', () => {
      expect(wareki(new Date(1867, 11, 31))).toBe('1867年');
    });
  });

  describe('Meiji', () => {
    it('should return "明治元年" with 1868/1/1', () => {
      expect(wareki(new Date(1868, 0, 1))).toBe('明治元年');
    });

    it('should return "明治2年" with 1869/1/1', () => {
      expect(wareki(new Date(1869, 0, 1))).toBe('明治2年');
    });

    it('should return "明治45年" with 1912/7/29', () => {
      expect(wareki(new Date(1912, 6, 29))).toBe('明治45年');
    });

    it('should return short "wareki"', () => {
      expect(wareki(new Date(1868, 0, 1), 'short')).toBe('明元年');
    });

    it('should return alpha "wareki"', () => {
      expect(wareki(new Date(1868, 0, 1), 'alpha')).toBe('M元年');
    });

    it('should appiy custom unit', () => {
      expect(wareki(new Date(1868, 0, 1), 'full', 'year')).toBe('明治元year');
    });
  });

  describe('Taisho', () => {
    it('should return "大正元年" with 1912/7/30', () => {
      expect(wareki(new Date(1912, 6, 30))).toBe('大正元年');
    });

    it('should return "大正2年" with 1913/7/30', () => {
      expect(wareki(new Date(1913, 6, 30))).toBe('大正2年');
    });

    it('should return "大正15年" with 1926/12/24', () => {
      expect(wareki(new Date(1926, 11, 24))).toBe('大正15年');
    });

    it('should return short "wareki"', () => {
      expect(wareki(new Date(1912, 6, 30), 'short')).toBe('大元年');
    });

    it('should return alpha "wareki"', () => {
      expect(wareki(new Date(1912, 6, 30), 'alpha')).toBe('T元年');
    });

    it('should appiy custom unit', () => {
      expect(wareki(new Date(1912, 6, 30), 'full', 'year')).toBe('大正元year');
    });
  });

  describe('Shouwa', () => {
    it('should return "昭和元年" with 1926/12/25', () => {
      expect(wareki(new Date(1926, 11, 25))).toBe('昭和元年');
    });

    it('should return "昭和2年" with 1927/12/25', () => {
      expect(wareki(new Date(1927, 11, 25))).toBe('昭和2年');
    });

    it('should return "昭和64年" with 1989/1/7', () => {
      expect(wareki(new Date(1989, 0, 7))).toBe('昭和64年');
    });

    it('should return short "wareki"', () => {
      expect(wareki(new Date(1926, 11, 25), 'short')).toBe('昭元年');
    });

    it('should return alpha "wareki"', () => {
      expect(wareki(new Date(1926, 11, 25), 'alpha')).toBe('S元年');
    });

    it('should appiy custom unit', () => {
      expect(wareki(new Date(1926, 11, 25), 'full', 'year')).toBe('昭和元year');
    });
  });

  describe('Heisei', () => {
    it('should return "平成元年" with 1989/1/8', () => {
      expect(wareki(new Date(1989, 0, 8))).toBe('平成元年');
    });

    it('should return "平成2年" with 1990/1/8', () => {
      expect(wareki(new Date(1990, 0, 8))).toBe('平成2年');
    });

    it('should return "平成31年" with 2019/4/31', () => {
      expect(wareki(new Date(2019, 3, 30))).toBe('平成31年');
    });

    it('should return short "wareki"', () => {
      expect(wareki(new Date(1989, 0, 8), 'short')).toBe('平元年');
    });

    it('should return alpha "wareki"', () => {
      expect(wareki(new Date(1989, 0, 8), 'alpha')).toBe('H元年');
    });

    it('should appiy custom unit', () => {
      expect(wareki(new Date(1989, 0, 8), 'full', 'year')).toBe('平成元year');
    });
  });

  describe('Reiwa', () => {
    it('should return "令和元年" with 2019/5/1', () => {
      expect(wareki(new Date(2019, 4, 1))).toBe('令和元年');
    });

    it('should return "令和元年" with 2020/5/1', () => {
      expect(wareki(new Date(2020, 4, 1))).toBe('令和2年');
    });

    it('should return "令和982年" with 3000/5/1', () => {
      expect(wareki(new Date(3000, 4, 1))).toBe('令和982年');
    });

    it('should return short "wareki"', () => {
      expect(wareki(new Date(2019, 4, 1), 'short')).toBe('令元年');
    });

    it('should return alpha "wareki"', () => {
      expect(wareki(new Date(2019, 4, 1), 'alpha')).toBe('R元年');
    });

    it('should appiy custom unit', () => {
      expect(wareki(new Date(2019, 4, 1), 'full', 'year')).toBe('令和元year');
    });
  });
});
