const MissionUtils = require('@woowacourse/mission-utils');
const {
  LOTTO_ONE_TICKET,
  PRINT_STRING,
  PRINT_ERROR_STRING,
} = require('./constants');

class App {
  constructor() {}

  inputBuyAmount() {
    MissionUtils.Console.readLine(
      PRINT_STRING.INPUT_BUY_AMOUNT,
      (buyAmount) => {
        this.validateBuyAmount(buyAmount);
        const amountCount = this.makeAmountCount(buyAmount);
      }
    );
  }

  validateBuyAmount(buyAmount) {
    if (buyAmount % LOTTO_ONE_TICKET !== 0)
      throw Error(PRINT_ERROR_STRING.ERROR_BUY_AMOUNT);
  }

  makeAmountCount(buyAmount) {
    return buyAmount / LOTTO_ONE_TICKET;
  }

  play() {
    this.inputBuyAmount();
  }
}

const app = new App();
app.play();
module.exports = App;
