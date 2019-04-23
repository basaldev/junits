export default function tsuki(date: Date, unit: string = '月'): string {
  return `${date.getMonth() + 1}${unit}`;
}
