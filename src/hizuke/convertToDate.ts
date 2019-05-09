import * as consts from '../constants';
import seirekiToDate from './seirekiToDate';
import warekiToDate from './warekiToDate';

export type WarekiArray = [consts.GengoAlpha, number, number?, number?, number?, number?, number?];
export type SeirekiArray = [number, number?, number?, number?, number?, number?];
export type Datetime = Date | WarekiArray | SeirekiArray;

export default function converToDate(date: Datetime): Date {
  if (date instanceof Date || (date as any).getDate) {
    return date as Date;
  } else if (Array.isArray(date)) {
    return typeof date[0] === 'number' ? seirekiToDate(...(date as SeirekiArray)) : warekiToDate(...(date as WarekiArray));
  } else {
    throw new Error('日付指定エラー');
  }
}
