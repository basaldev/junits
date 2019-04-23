export default function ji(date: Date, unit: string = '時'): string {
  return `${date.getHours()}${unit}`;
}
