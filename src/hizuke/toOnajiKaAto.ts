export default function toOnajiKaAto(date1: Date, date2: Date): boolean {
  return date1.getTime() >= date2.getTime();
}
