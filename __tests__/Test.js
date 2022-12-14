const App = require('../src/App');
const Lotto = require('../src/Lotto');

describe('APP 기능 테스트', () => {
  test('validateBuyAmount', () => {
    const app = new App();
    expect(() => app.validateBuyAmount(1100)).toThrow();
    expect(() => app.validateBuyAmount(1110)).toThrow();
    expect(() => app.validateBuyAmount(1111)).toThrow();

    expect(() => app.validateBuyAmount(1000)).not.toThrow();
    expect(() => app.validateBuyAmount(10000)).not.toThrow();
    expect(() => app.validateBuyAmount(100000)).not.toThrow();
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

  test('validateNumberLength', () => {
    const app = new App();
    expect(() => app.validateNumberLength([1, 2, 3, 4, 5])).toThrow();
    expect(() => app.validateNumberLength([1, 2, 3, 4, 5, 6, 7])).toThrow();

    expect(() => app.validateNumberLength([1, 2, 3, 4, 5, 6])).not.toThrow();
    expect(() => app.validateNumberLength([6, 5, 4, 3, 2, 1])).not.toThrow();
  });

  test('validateNumberDuplicate', () => {
    const app = new App();
    expect(() => app.validateNumberDuplicate([1, 2, 3, 4, 5, 5])).toThrow();
    expect(() => app.validateNumberDuplicate([1, 2, 3, 4, 5, 6, 6])).toThrow();

    expect(() => app.validateNumberDuplicate([1, 2, 3, 4, 5, 6])).not.toThrow();
    expect(() =>
      app.validateNumberDuplicate([1, 2, 3, 4, 5, 6, 7])
    ).not.toThrow();
  });

  test('validateNumberRange', () => {
    const app = new App();
    expect(() => app.validateNumberRange(0)).toThrow();
    expect(() => app.validateNumberRange(46)).toThrow();

    expect(() => app.validateNumberRange(1)).not.toThrow();
    expect(() => app.validateNumberRange(45)).not.toThrow();
  });

  test('makeRankCount', () => {
    const app = new App();
    const randomNumbers = [
      [1, 2, 3, 4, 5, 6],
      [1, 2, 3, 4, 5, 7],
      [1, 2, 3, 4, 5, 8],
      [1, 2, 3, 4, 8, 9],
      [1, 2, 3, 8, 9, 10],
      [11, 12, 13, 18, 19, 20],
    ];
    const lottoArray = [];
    for (let i = 0; i < randomNumbers.length; i++) {
      lottoArray.push(new Lotto(randomNumbers[i]));
    }

    expect(app.makeRankCount(lottoArray, [1, 2, 3, 4, 5, 6], 7)).toEqual([
      1, 1, 1, 1, 1, 1,
    ]);
  });

  test('calculateRevenue', () => {
    const app = new App();

    expect(app.calculateRevenue([1, 0, 0, 0, 0, 0], 5000)).toEqual('100.0');
    expect(app.calculateRevenue([0, 1, 0, 0, 0, 0], 5000)).toEqual('1000.0');
    expect(app.calculateRevenue([0, 0, 1, 0, 0, 0], 5000)).toEqual('30000.0');
    expect(app.calculateRevenue([0, 0, 0, 1, 0, 0], 5000)).toEqual('600000.0');
    expect(app.calculateRevenue([0, 0, 0, 0, 1, 0], 5000)).toEqual('4000000.0');
  });
});
