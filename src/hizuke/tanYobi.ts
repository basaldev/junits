import * as consts from '../constants';

export default function tanYobi(date: Date, before: string = '（', after: string = '）'): string {
  return `${before}${consts.date.yobi[date.getDay()]}${after}`;
}
