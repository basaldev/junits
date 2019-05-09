import atai from './atai';

type Type = 'full' | 'short' | 'alpha';

export default function wareki(date: Date, type: Type = 'full', unit: string = '年'): string {
  const {
    wareki: { gengo, tanGengo, alphaGengo, nen }
  } = atai(date);
  const jaYear = nen === 1 ? '元' : nen;
  switch (type) {
    case 'short':
      return `${tanGengo}${jaYear}${unit}`;
    case 'alpha':
      return `${alphaGengo}${jaYear}${unit}`;
    default:
      return `${gengo}${jaYear}${unit}`;
  }
}
