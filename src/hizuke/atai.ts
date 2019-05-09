import * as consts from '../constants';
import findGengo from './findGengo';

interface IWareki {
  gengo: string;
  tanGengo: string;
  alphaGengo: string;
  nen: number;
}

export interface IAtai {
  seireki: number;
  wareki: IWareki;
  tsuki: number;
  hi: number;
  ji: number;
  fun: number;
  byo: number;
}

export default function atai(date: Date): IAtai {
  const seirekiNen = date.getFullYear();
  const tsuki = date.getMonth() + 1;
  const hi = date.getDate();
  const ji = date.getHours();
  const fun = date.getMinutes();
  const byo = date.getSeconds();
  const { start: gengoStart, full: gengo, short: tanGengo, alpha: alphaGengo } = findGengo(date);
  const seireki = date.getFullYear();
  const wareki = { gengo, tanGengo, alphaGengo, nen: seirekiNen - gengoStart[0] + 1 };
  return { seireki, wareki, tsuki, hi, ji, fun, byo };
}
