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

  test('validateWinningNumbersLength', () => {
    const app = new App();

    expect(() =>
      app.validateWinningNumbersLength([1, 2, 3, 4, 5, 6, 7])
    ).toThrow();

    expect(() =>
      app.validateWinningNumbersLength([1, 2, 3, 4, 5, 6])
    ).not.toThrow();
  });

  test('validateWinningNumbersDuple', () => {
    const app = new App();

    expect(() => app.validateWinningNumbersDuple([1, 2, 3, 4, 5, 5])).toThrow();

    expect(() =>
      app.validateWinningNumbersDuple([1, 2, 3, 4, 5, 6])
    ).not.toThrow();
  });

  test('validateNumbersRange', () => {
    const app = new App();

    expect(() => app.validateNumbersRange([0, 2, 3, 4, 5, 6])).toThrow();
    expect(() => app.validateNumbersRange([1, 2, 3, 4, 5, 46])).toThrow();

    expect(() => app.validateNumbersRange([1, 2, 3, 4, 5, 6])).not.toThrow();
    expect(() => app.validateNumbersRange([1, 2, 3, 4, 5, 45])).not.toThrow();
  });
});
