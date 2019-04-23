export default function fun(date: Date, unit: string = '分'): string {
  return `${date.getMinutes()}${unit}`;
}
