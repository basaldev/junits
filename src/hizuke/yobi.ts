import * as consts from '../constants';

export default function yobi(date: Date, unit: string = '曜日' ): string {
  return `${consts.date.yobi[date.getDay()]}${unit}`;
}
