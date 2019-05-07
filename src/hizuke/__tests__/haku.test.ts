import haku from '../haku';

describe('haku', () => {
  it('should return multibyte space', () => {
    expect(haku()).toBe(' ');
  });

  it('should apply custom space charactor', () => {
    expect(haku('-')).toBe('-');
  });
});
