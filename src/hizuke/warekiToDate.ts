import * as consts from '../constants';

export default function warekiToDate(
  gengoAlpha: consts.GengoAlpha,
  gengoYear: number,
  month: number = 1,
  date: number = 1,
  hour: number = 0,
  minute: number = 0,
  second: number = 0
): Date {
  const gengo = consts.date.gengo.find(({ alpha }) => alpha === gengoAlpha);
  if (!gengo) {
    throw new Error(`"${gengoAlpha}"は元号アルファベットには存在しません。`);
  }
  if (!gengoYear) {
    throw new Error('年は1以上を指定してください。');
  }
  const seirekiYear = gengo.start[0] + gengoYear - 1;
  return new Date(seirekiYear, month - 1, date, hour, minute, second);
}
