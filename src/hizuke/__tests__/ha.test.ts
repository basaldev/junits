jest.mock('../yoriMae');
jest.mock('../yoriAto');
jest.mock('../toOnaji');
jest.mock('../toOnajiKaMae');
jest.mock('../toOnajiKaAto');
jest.mock('../noAida');

import yoriMae from '../yoriMae';
import yoriAto from '../yoriAto';
import toOnaji from '../toOnaji';
import toOnajiKaMae from '../toOnajiKaMae';
import toOnajiKaAto from '../toOnajiKaAto';
import noAida from '../noAida';
import ha from '../ha';

describe('ha', () => {
  let date1;
  let date2;
  let date3;
  let expectedHaReturn;

  beforeEach(() => {
    date1 = new Date(2019, 4, 7, 13, 16, 20);
    date2 = new Date(2020, 4, 7, 13, 16, 20);
    date3 = new Date(2021, 4, 7, 13, 16, 20);
    expectedHaReturn = {
      to: expect.any(Function),
      toOnaji: expect.any(Function),
      toOnajiKaAto: expect.any(Function),
      toOnajiKaMae: expect.any(Function),
      yoriAto: expect.any(Function),
      yoriMae: expect.any(Function)
    };
  });

  it('should return proper members', () => {
    expect(ha(date1, date2)).toMatchSnapshot(expectedHaReturn);
  });

  it('should call yoriMae', () => {
    ha(date1, date2).yoriMae();
    expect(yoriMae).toHaveBeenLastCalledWith(date1, date2);
  });

  it('should call yoriAto', () => {
    ha(date1, date2).yoriAto();
    expect(yoriAto).toHaveBeenLastCalledWith(date1, date2);
  });

  it('should call toOnaji', () => {
    ha(date1, date2).toOnaji();
    expect(toOnaji).toHaveBeenLastCalledWith(date1, date2);
  });

  it('should call toOnajiKaMae', () => {
    ha(date1, date2).toOnajiKaMae();
    expect(toOnajiKaMae).toHaveBeenLastCalledWith(date1, date2);
  });

  it('should call toOnajiKaAto', () => {
    ha(date1, date2).toOnajiKaAto();
    expect(toOnajiKaAto).toHaveBeenLastCalledWith(date1, date2);
  });

  it('should call to().noAida', () => {
    ha(date1, date2)
      .to(date3)
      .noAida();
    expect(noAida).toHaveBeenLastCalledWith(date1, date2, date3);
  });
});
