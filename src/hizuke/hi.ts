export default function hi(date: Date, unit: string = '日'): string {
  return `${date.getDate()}${unit}`;
}
