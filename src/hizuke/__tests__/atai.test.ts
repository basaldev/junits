import atai from '../atai';
import * as consts from '../../constants';

const [Reiwa] = consts.date.gengo;

describe('atai', () => {
  it('should return members', () => {
    const expectedReturn = {
      seireki: 2019,
      wareki: {
        gengo: '令和',
        tanGengo: '令',
        alphaGengo: 'R',
        nen: 1
      },
      tsuki: 5,
      hi: 7,
      ji: 13,
      fun: 16,
      byo: 20
    };
    expect(atai(new Date(2019, 4, 7, 13, 16, 20))).toMatchSnapshot(expectedReturn);
  });

  describe('Meiji', () => {
    it('should return "明治元年" with 1868/1/1', () => {
      expect(atai(new Date(1868, 0, 1)).wareki.nen).toBe(1);
    });

    it('should return "明治2年" with 1869/1/1', () => {
      expect(atai(new Date(1869, 0, 1)).wareki.nen).toBe(2);
    });

    it('should return "明治45年" with 1912/7/29', () => {
      expect(atai(new Date(1912, 6, 29)).wareki.nen).toBe(45);
    });
  });

  describe('Taisho', () => {
    it('should return "大正元年" with 1912/7/30', () => {
      expect(atai(new Date(1912, 6, 30)).wareki.nen).toBe(1);
    });

    it('should return "大正2年" with 1913/7/30', () => {
      expect(atai(new Date(1913, 6, 30)).wareki.nen).toBe(2);
    });

    it('should return "大正15年" with 1926/12/24', () => {
      expect(atai(new Date(1926, 11, 24)).wareki.nen).toBe(15);
    });
  });

  describe('Shouwa', () => {
    it('should return "昭和元年" with 1926/12/25', () => {
      expect(atai(new Date(1926, 11, 25)).wareki.nen).toBe(1);
    });

    it('should return "昭和2年" with 1927/12/25', () => {
      expect(atai(new Date(1927, 11, 25)).wareki.nen).toBe(2);
    });

    it('should return "昭和64年" with 1989/1/7', () => {
      expect(atai(new Date(1989, 0, 7)).wareki.nen).toBe(64);
    });
  });

  describe('Heisei', () => {
    it('should return "平成元年" with 1989/1/8', () => {
      expect(atai(new Date(1989, 0, 8)).wareki.nen).toBe(1);
    });

    it('should return "平成2年" with 1990/1/8', () => {
      expect(atai(new Date(1990, 0, 8)).wareki.nen).toBe(2);
    });

    it('should return "平成31年" with 2019/4/31', () => {
      expect(atai(new Date(2019, 3, 30)).wareki.nen).toBe(31);
    });
  });

  describe('Reiwa', () => {
    it('should return "令和元年" with 2019/5/1', () => {
      expect(atai(new Date(2019, 4, 1)).wareki.nen).toBe(1);
    });

    it('should return "令和元¥2年" with 2020/5/1', () => {
      expect(atai(new Date(2020, 4, 1)).wareki.nen).toBe(2);
    });

    it('should return "令和982年" with 3000/5/1', () => {
      expect(atai(new Date(3000, 4, 1)).wareki.nen).toBe(982);
    });
  });
});
