import findGengo from '../findGengo';
import * as consts from '../../constants';

const [Reiwa, Heisei, Showa, Taisho, Meiji] = consts.date.gengo;

describe('wareki', () => {
  describe('Before Meiji', () => {
    it('should throw an error with the date before Meiji', () => {
      expect(() => findGengo(new Date(1867, 11, 31))).toThrowError('西暦1867年に対応する元号が見つかりません。');
    });
  });

  describe('Meiji', () => {
    it('should return "明治" with 1868/1/1', () => {
      expect(findGengo(new Date(1868, 0, 1))).toEqual(Meiji);
    });

    it('should return "明治" with 1869/1/1', () => {
      expect(findGengo(new Date(1869, 0, 1))).toEqual(Meiji);
    });

    it('should return "明治" with 1912/7/29', () => {
      expect(findGengo(new Date(1912, 6, 29))).toEqual(Meiji);
    });
  });

  describe('Taisho', () => {
    it('should return "大正" with 1912/7/30', () => {
      expect(findGengo(new Date(1912, 6, 30))).toEqual(Taisho);
    });

    it('should return "大正" with 1913/7/30', () => {
      expect(findGengo(new Date(1913, 6, 30))).toEqual(Taisho);
    });

    it('should return "大正" with 1926/12/24', () => {
      expect(findGengo(new Date(1926, 11, 24))).toEqual(Taisho);
    });
  });

  describe('Shouwa', () => {
    it('should return "昭和" with 1926/12/25', () => {
      expect(findGengo(new Date(1926, 11, 25))).toEqual(Showa);
    });

    it('should return "昭和" with 1927/12/25', () => {
      expect(findGengo(new Date(1927, 11, 25))).toEqual(Showa);
    });

    it('should return "昭和" with 1989/1/7', () => {
      expect(findGengo(new Date(1989, 0, 7))).toEqual(Showa);
    });
  });

  describe('Heisei', () => {
    it('should return "平成" with 1989/1/8', () => {
      expect(findGengo(new Date(1989, 0, 8))).toEqual(Heisei);
    });

    it('should return "平成" with 1990/1/8', () => {
      expect(findGengo(new Date(1990, 0, 8))).toEqual(Heisei);
    });

    it('should return "平成" with 2019/4/31', () => {
      expect(findGengo(new Date(2019, 3, 30))).toEqual(Heisei);
    });
  });

  describe('Reiwa', () => {
    it('should return "令和" with 2019/5/1', () => {
      expect(findGengo(new Date(2019, 4, 1))).toEqual(Reiwa);
    });

    it('should return "令和" with 2020/5/1', () => {
      expect(findGengo(new Date(2020, 4, 1))).toEqual(Reiwa);
    });

    it('should return "令和" with 3000/5/1', () => {
      expect(findGengo(new Date(3000, 4, 1))).toEqual(Reiwa);
    });
  });
});
