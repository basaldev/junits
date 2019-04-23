export default function noAida(date1: Date, date2: Date, date3: Date): boolean {
  return date1.getTime() >= date2.getTime() && date1.getTime() <= date3.getTime();
}
