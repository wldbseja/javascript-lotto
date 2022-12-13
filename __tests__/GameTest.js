const App = require('../src/App');

describe('App 기능 테스트', () => {
  test('validateBuyAmount', () => {
    const app = new App();

    expect(() => app.validateBuyAmount(1111)).toThrow();
    expect(() => app.validateBuyAmount(2222)).toThrow();

    expect(() => app.validateBuyAmount(1000)).not.toThrow();
    expect(() => app.validateBuyAmount(2000)).not.toThrow();
  });
});
