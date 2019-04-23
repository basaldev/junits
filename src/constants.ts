
type Gengo = {
  start: number[];
  full: string;
  short: string;
  alpha: string;
};

type Yobi = string;

type Shogo = string;

type Date = {
  gengo: Gengo[];
  yobi: Yobi[];
  shogo: Shogo[];
};

export const date: Date = {
  gengo: [
    { start: [2019, 4, 1], full: '令和', short: '令', alpha: 'R' },
    { start: [1989, 0, 8], full: '平成', short: '平', alpha: 'H' },
    { start: [1926, 11, 25], full: '昭和', short: '昭', alpha: 'S' },
    { start: [1912, 6 ,30], full: '大正', short: '大', alpha: 'T' },
    { start: [1868, 0, 1], full: '明治', short: '明', alpha: 'M' }
  ],

  yobi: ['月', '火', '水', '木', '金', '土', '日'],

  shogo: ['午前', '午後']
};