import converToDate, { Datetime } from './convertToDate';
import yoriMae from './yoriMae';
import yoriAto from './yoriAto';
import toOnaji from './toOnaji';
import toOnajiKaMae from './toOnajiKaMae';
import toOnajiKaAto from './toOnajiKaAto';
import noAida from './noAida';

export default function ha(date1: Date, date2: Date) {
  return {
    yoriMae: () => yoriMae(date1, date2),
    yoriAto: () => yoriAto(date1, date2),
    toOnaji: () => toOnaji(date1, date2),
    toOnajiKaMae: () => toOnajiKaMae(date1, date2),
    toOnajiKaAto: () => toOnajiKaAto(date1, date2),
    to: (date3: Datetime) => ({ noAida: () => noAida(date1, date2, converToDate(date3)) })
  };
}
