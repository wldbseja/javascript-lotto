const App = require('../src/App');

describe('App 기능 테스트', () => {
  test('validateBuyAmount', () => {
    const app = new App();

    expect(() => app.validateBuyAmount(1111)).toThrow();
    expect(() => app.validateBuyAmount(2222)).toThrow();

    expect(() => app.validateBuyAmount(1000)).not.toThrow();
    expect(() => app.validateBuyAmount(2000)).not.toThrow();
  });

  test('makeAmountCount', () => {
    const app = new App();

    expect(app.makeAmountCount(1000)).toEqual(1);
    expect(app.makeAmountCount(5000)).toEqual(5);
    expect(app.makeAmountCount(10000)).toEqual(10);
  });
});
