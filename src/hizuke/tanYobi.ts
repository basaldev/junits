import * as consts from '../constants';

export default function yobi(date: Date, before: string = '（', after: string = '）' ): string {
  return `${before}${consts.date.yobi[date.getDay()]}${after}`;
}
