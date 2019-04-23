export default function byo(date: Date, unit: string = '秒'): string {
  return `${date.getSeconds()}${unit}`;
}
