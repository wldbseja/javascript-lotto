const App = require('../src/App');
const Lotto = require('../src/Lotto');

describe('로또 게임 기능 테스트', () => {
  test('checkBuyAmount', () => {
    const app = new App();
    expect(() => app.checkBuyAmount(1111)).toThrow();
    expect(() => app.checkBuyAmount(11111)).toThrow();
    expect(() => app.checkBuyAmount(111111)).toThrow();

    expect(() => app.checkBuyAmount(1000)).not.toThrow();
    expect(() => app.checkBuyAmount(10000)).not.toThrow();
    expect(() => app.checkBuyAmount(100000)).not.toThrow();
  });

  test('makeLottoCount', () => {
    const app = new App();
    expect(app.makeLottoCount(1000)).toEqual(1);
    expect(app.makeLottoCount(5000)).toEqual(5);
    expect(app.makeLottoCount(10000)).toEqual(10);
  });

  test('convertWinningNumber', () => {
    const app = new App();
    expect(app.convertWinningNumber('1, 2, 3, 4, 5, 6')).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
    expect(app.convertWinningNumber('6, 5, 4, 3, 2, 1')).toEqual([
      6, 5, 4, 3, 2, 1,
    ]);
  });

  test('validateNumbersLength', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(() => lotto.validateNumbersLength([1, 2, 3, 4, 5, 6, 7])).toThrow();

    expect(() => lotto.validateNumbersLength([1, 2, 3, 4, 5, 6])).not.toThrow();
  });

  test('validateNumbersDuple', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(() => lotto.validateNumbersDuple([1, 2, 3, 4, 5, 5])).toThrow();

    expect(() => lotto.validateNumbersDuple([1, 2, 3, 4, 5, 6])).not.toThrow();
  });
});
