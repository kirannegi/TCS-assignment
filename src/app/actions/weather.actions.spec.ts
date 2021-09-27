import * as fromWeather from './weather.actions';

describe('aPPWeathers', () => {
  it('should return an action', () => {
    expect(fromWeather.aPPWeathers().type).toBe('[Weather] APP Weathers');
  });
});
