export default function seireki(date: Date, unit: string = '年'): string {
  return `${date.getFullYear()}${unit}`;
}
