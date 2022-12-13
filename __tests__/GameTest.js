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

  test('convertWinningNumbers', () => {
    const app = new App();

    expect(app.convertWinningNumbers('1,2,3,4,5,6')).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
    expect(app.convertWinningNumbers('6,5,4,3,2,1')).toEqual([
      6, 5, 4, 3, 2, 1,
    ]);
  });
});
