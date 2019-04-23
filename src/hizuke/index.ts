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

export default function hizuke(date: Date = new Date(), state = []) {
  function setState(value) {
    state.push(value);
    return hizuke(date, state);
  }

  function fixDigit(value) {
    const index = state.length - 1;
    state[index] = state[index].replace(/^(.*?)(\d+)(.*?)$/, (...args) =>
      args[1] + `00000${args[2]}`.slice(-value) + args[3]);
    return hizuke(date, state);
  }
  
  function output() {
    return state.join('');
  }

  return {
    seireki: (unit: string) => setState(seireki(date, unit)),
    wareki: (unit: string) => setState(wareki(date, 'full', unit)),
    tanWareki: (unit: string) => setState(wareki(date, 'short', unit)),
    alphaWareki: (unit: string) => setState(wareki(date, 'alpha', unit)),
    tsuki: (unit: string) => setState(tsuki(date, unit)),
    hi: (unit: string) => setState(hi(date, unit)),
    tanYobi: (unit: string) => setState(tanYobi(date, unit)),
    yobi: (unit: string) => setState(yobi(date, unit)),
    ji: (unit: string) => setState(ji(date, unit)),
    fun: (unit: string) => setState(fun(date, unit)),
    byo: (unit: string) => setState(byo(date, unit)),
    haku:(value: string) =>  setState(haku(value)),
    niketa: () => fixDigit(2),
    ijo: output,
    ha:(date2: Date) => ha(date, date2),
  }
}