import * as consts from '../constants';
import seireki from './seireki';
import toOnajiKaAto from './toOnajiKaAto';
import yoriMae from './yoriMae';

const futureGengo = { start: [99999, 11, 31] };

type Type = 'full' | 'short' | 'alpha';

export default function wareki(date: Date, type: Type = 'full', unit: string = '年'): string {
  const fullyear = date.getFullYear();
  const gengo = consts.date.gengo.find(({ start }, index) => {
    const { start: nextStart } = consts.date.gengo[index - 1] || futureGengo;
    return toOnajiKaAto(date, new Date(start[0], start[1], start[2])) && yoriMae(date, new Date(nextStart[0], nextStart[1], nextStart[2]));
  });
  if (!gengo) {
    // tslint:disable-next-line:no-console
    console.warn(`西暦${fullyear}年に対応する元号が見つかりません。`);
    return seireki(date, unit);
  }
  const year = fullyear - gengo.start[0] + 1;
  const jaYear = year === 1 ? '元' : year;
  return `${gengo[type]}${jaYear}${unit}`;
}
