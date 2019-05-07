import fun from '../fun';

describe('fun', () => {
  it('should return "fun"', () => {
    expect(fun(new Date(2019, 4, 7, 13, 16, 20))).toBe('16分');
  });

  it('should apply custom unit', () => {
    expect(fun(new Date(2019, 4, 7, 13, 16, 20), ' minutes')).toBe('16 minutes');
  });
});
