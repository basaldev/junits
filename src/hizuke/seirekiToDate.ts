export default function seirekiToDate(
  year: number,
  month: number = 1,
  date: number = 1,
  hour: number = 0,
  minute: number = 0,
  second: number = 0
): Date {
  if (!year) {
    throw new Error('年は1以上を指定してください。');
  }
  return new Date(year, month - 1, date, hour, minute, second);
}
