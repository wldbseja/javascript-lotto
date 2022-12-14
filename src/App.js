const MissionUtils = require('@woowacourse/mission-utils');
const {
  LOTTO_ONE_TICKET,
  LOTTO_LENGTH,
  PRINT_STRING,
  ERROR_PRINT_STRING,
  PRINT_WINNING_STATISTICS,
  PRINT_REVENUE,
} = require('./constants');

class App {
  constructor() {}

  inputBuyAmount() {
    MissionUtils.Console.readLine(
      PRINT_STRING.INPUT_BUY_AMOUNT,
      (buyAmount) => {
        this.buyAmount = buyAmount;
        this.validateBuyAmount(buyAmount);
      }
    );
  }

  validateBuyAmount(buyAmount) {
    if (buyAmount % LOTTO_ONE_TICKET !== 0)
      throw Error(ERROR_PRINT_STRING.ERROR_BUY_AMOUNT);
  }

  play() {
    this.inputBuyAmount();
  }
}

const app = new App();
app.play();
module.exports = App;
