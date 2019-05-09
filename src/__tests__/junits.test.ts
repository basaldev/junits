import Hizuke from '../hizuke';
import * as jUnits from '../junits';

describe('jUnits', () => {
  let expectedReturn;

  beforeEach(() => {
    expectedReturn = {
      hizuke: Hizuke
    };
  });

  it('should be defined', () => {
    expect(jUnits).toMatchSnapshot(expectedReturn);
  });
});
