jest.mock('../seireki');
jest.mock('../wareki');
jest.mock('../tsuki');
jest.mock('../hi');
jest.mock('../tanYobi');
jest.mock('../yobi');
jest.mock('../ji');
jest.mock('../fun');
jest.mock('../byo');
jest.mock('../haku');
jest.mock('../ha');

import seireki from '../seireki';
import wareki from '../wareki';
import tsuki from '../tsuki';
import hi from '../hi';
import tanYobi from '../tanYobi';
import yobi from '../yobi';
import ji from '../ji';
import fun from '../fun';
import byo from '../byo';
import haku from '../haku';
import ha from '../ha';
import hizuke from '../index';

describe('hizuke', () => {
  let date0;
  let date1;
  let date2;
  let expectedHizukeReturn;
  let originalDate;

  beforeAll(() => {
    date0 = new Date(2019, 4, 7, 13, 16, 20);
    originalDate = Date;
    // @ts-ignore
    Date = class extends originalDate {
      constructor(...args) {
        super();
        if (args.length) {
          return new originalDate(...args);
        }
        return date0;
      }
    };
  });

  afterAll(() => {
    Date = originalDate;
  });

  beforeEach(() => {
    date1 = new Date(2019, 4, 7, 13, 16, 20);
    date2 = new Date(2020, 4, 7, 13, 16, 20);
    expectedHizukeReturn = {
      seireki: expect.any(Function),
      wareki: expect.any(Function),
      tanWareki: expect.any(Function),
      alphaWareki: expect.any(Function),
      tsuki: expect.any(Function),
      hi: expect.any(Function),
      tanYobi: expect.any(Function),
      yobi: expect.any(Function),
      ji: expect.any(Function),
      fun: expect.any(Function),
      byo: expect.any(Function),
      haku: expect.any(Function),
      niketa: expect.any(Function),
      moji: expect.any(Function),
      atai: expect.any(Function),
      ha: expect.any(Function)
    };
  });

  it('should return proper members', () => {
    expect(hizuke(date1)).toMatchSnapshot(expectedHizukeReturn);
  });

  it('should create new date instance without the first arg', () => {
    hizuke().seireki('unit');
    expect(seireki).toHaveBeenLastCalledWith(date0, 'unit');
  });

  it('should call seireki', () => {
    expect(hizuke(date1).seireki('unit')).toMatchSnapshot(expectedHizukeReturn);
    expect(seireki).toHaveBeenLastCalledWith(date1, 'unit');
  });

  it('should call wareki', () => {
    expect(hizuke(date1).wareki('unit')).toMatchSnapshot(expectedHizukeReturn);
    expect(wareki).toHaveBeenLastCalledWith(date1, 'full', 'unit');
  });

  it('should call tanWareki', () => {
    expect(hizuke(date1).tanWareki('unit')).toMatchSnapshot(expectedHizukeReturn);
    expect(wareki).toHaveBeenLastCalledWith(date1, 'short', 'unit');
  });

  it('should call alphaWareki', () => {
    expect(hizuke(date1).alphaWareki('unit')).toMatchSnapshot(expectedHizukeReturn);
    expect(wareki).toHaveBeenLastCalledWith(date1, 'alpha', 'unit');
  });

  it('should call tsuki', () => {
    expect(hizuke(date1).tsuki('unit')).toMatchSnapshot(expectedHizukeReturn);
    expect(tsuki).toHaveBeenLastCalledWith(date1, 'unit');
  });

  it('should call hi', () => {
    expect(hizuke(date1).hi('unit')).toMatchSnapshot(expectedHizukeReturn);
    expect(hi).toHaveBeenLastCalledWith(date1, 'unit');
  });

  it('should call tanYobi', () => {
    expect(hizuke(date1).tanYobi('unit')).toMatchSnapshot(expectedHizukeReturn);
    expect(tanYobi).toHaveBeenLastCalledWith(date1, 'unit');
  });

  it('should call yobi', () => {
    expect(hizuke(date1).yobi('unit')).toMatchSnapshot(expectedHizukeReturn);
    expect(yobi).toHaveBeenLastCalledWith(date1, 'unit');
  });

  it('should call ji', () => {
    expect(hizuke(date1).ji('unit')).toMatchSnapshot(expectedHizukeReturn);
    expect(ji).toHaveBeenLastCalledWith(date1, 'unit');
  });

  it('should call fun', () => {
    expect(hizuke(date1).fun('unit')).toMatchSnapshot(expectedHizukeReturn);
    expect(fun).toHaveBeenLastCalledWith(date1, 'unit');
  });

  it('should call byo', () => {
    expect(hizuke(date1).byo('unit')).toMatchSnapshot(expectedHizukeReturn);
    expect(byo).toHaveBeenLastCalledWith(date1, 'unit');
  });

  it('should call haku', () => {
    expect(hizuke(date1).haku('space')).toMatchSnapshot(expectedHizukeReturn);
    expect(haku).toHaveBeenLastCalledWith('space');
  });

  it('should call niketa/fixDigit', () => {
    const myHizuke2 = jest.fn(hizuke);
    expect(myHizuke2(date1, ['令和2年']).niketa()).toMatchSnapshot(expectedHizukeReturn);
    expect(myHizuke2).toHaveBeenLastCalledWith(date1, ['令和02年']);
  });

  it('should call moji/output', () => {
    expect(hizuke(date1, ['1月', '2日']).moji()).toBe('1月2日');
  });

  it('should call atai/value', () => {
    expect(hizuke(date1).atai()).toEqual({
      byo: 20,
      fun: 16,
      hi: 7,
      ji: 13,
      seireki: 2019,
      tsuki: 5,
      wareki: {
        alphaGengo: 'R',
        gengo: '令和',
        nen: 1,
        tanGengo: '令'
      }
    });
  });

  it('should call ha', () => {
    hizuke(date1).ha(date2);
    expect(ha).toHaveBeenLastCalledWith(date1, date2);
  });
});
