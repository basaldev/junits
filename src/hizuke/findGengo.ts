import * as consts from '../constants';
import toOnajiKaAto from './toOnajiKaAto';
import yoriMae from './yoriMae';

const futureGengo = { start: [99999, 11, 31] };

export default function findGengo(date): consts.IGengo {
  const gengo = consts.date.gengo.find(({ start }, index) => {
    const { start: nextStart } = consts.date.gengo[index - 1] || futureGengo;
    const startDate = new Date(start[0], start[1], start[2]);
    const nextStartDate = new Date(nextStart[0], nextStart[1], nextStart[2]);
    return toOnajiKaAto(date, startDate) && yoriMae(date, nextStartDate);
  });

  if (!gengo) {
    const year = date.getFullYear();
    throw new Error(`西暦${year}年に対応する元号が見つかりません。`);
  }

  return gengo;
}
