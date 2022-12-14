const App = require('../src/App');

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
});
