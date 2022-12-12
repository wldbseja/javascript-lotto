const App = require('../src/App');

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
});
