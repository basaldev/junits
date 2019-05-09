import convertToDate, { Datetime } from './convertToDate';
import atai, { IAtai } from './atai';
import seireki from './seireki';
import wareki from './wareki';
import tsuki from './tsuki';
import hi from './hi';
import tanYobi from './tanYobi';
import yobi from './yobi';
import ji from './ji';
import fun from './fun';
import byo from './byo';
import haku from './haku';
import ha from './ha';

export default function hizuke(date: Datetime = new Date(), state = []) {
  function setState(value) {
    state.push(value);
    return hizuke(date, state);
  }

  function fixDigit(value) {
    const index = state.length - 1;
    state[index] = state[index].replace(/^(.*?)(\d+)(.*?)$/, (...args) => args[1] + `00000${args[2]}`.slice(-value) + args[3]);
    return hizuke(date, state);
  }

  function output() {
    return state.join('');
  }

  const date1 = convertToDate(date);

  return {
    seireki: (unit?: string) => setState(seireki(date1, unit)),
    wareki: (unit?: string) => setState(wareki(date1, 'full', unit)),
    tanWareki: (unit?: string) => setState(wareki(date1, 'short', unit)),
    alphaWareki: (unit?: string) => setState(wareki(date1, 'alpha', unit)),
    tsuki: (unit?: string) => setState(tsuki(date1, unit)),
    hi: (unit?: string) => setState(hi(date1, unit)),
    tanYobi: (unit?: string) => setState(tanYobi(date1, unit)),
    yobi: (unit?: string) => setState(yobi(date1, unit)),
    ji: (unit?: string) => setState(ji(date1, unit)),
    fun: (unit?: string) => setState(fun(date1, unit)),
    byo: (unit?: string) => setState(byo(date1, unit)),
    haku: (value?: string) => setState(haku(value)),
    niketa: () => fixDigit(2),
    moji: output,
    atai: () => atai(date1),
    ha: (date2: Date) => ha(date1, convertToDate(date2))
  };
}
