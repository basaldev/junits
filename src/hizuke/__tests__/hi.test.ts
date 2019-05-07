import hi from '../hi';

describe('hi', () => {
  it('should return "hi"', () => {
    expect(hi(new Date(2019, 4, 7, 13, 16, 20))).toBe('7日');
  });

  it('should apply custom unit', () => {
    expect(hi(new Date(2019, 4, 7, 13, 16, 20), 'th')).toBe('7th');
  });
});
