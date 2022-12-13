const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
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
        this.buyAmount = buyAmount;
        this.validateBuyAmount(buyAmount);
        const amountCount = this.makeAmountCount(buyAmount);
        MissionUtils.Console.print(PRINT_STRING.AMOUNT_COUNT(amountCount));
        this.sendGenerateRandomLottoNumbers(amountCount);
        this.inputWinningNumbers();
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

  sendGenerateRandomLottoNumbers(amountCount) {
    this.lottoArray = [];
    for (let i = 0; i < amountCount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottoArray.push(new Lotto(numbers));
    }
  }

  inputWinningNumbers() {
    MissionUtils.Console.readLine(
      PRINT_STRING.WINNING_NUMBERS,
      (winningNumber) => {}
    );
  }

  play() {
    this.inputBuyAmount();
  }
}

const app = new App();
app.play();
module.exports = App;
