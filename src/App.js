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
      (winningNumber) => {
        this.winningNumber = this.convertWinningNumbers(winningNumber);
        this.validateWinningNumbers(this.winningNumber);
        this.inputBonusNumber();
      }
    );
  }

  convertWinningNumbers(winningNumber) {
    return winningNumber.split(',').map(Number);
  }

  validateWinningNumbers(winningNumber) {
    this.validateWinningNumbersLength(winningNumber);
    this.validateWinningNumbersDuple(winningNumber);
    this.validateNumbersRange(winningNumber);
  }

  validateWinningNumbersLength(winningNumber) {
    if (winningNumber.length !== 6)
      throw Error(PRINT_ERROR_STRING.ERROR_LENGTH_NUMBER);
  }

  validateWinningNumbersDuple(winningNumber) {
    const setWinning = new Set(winningNumber);
    if (setWinning.size !== 6)
      throw Error(PRINT_ERROR_STRING.ERROR_DUPLE_NUMBER);
  }

  validateNumbersRange(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (!(numbers[i] > 0 && numbers[i] < 46))
        throw Error(PRINT_ERROR_STRING.ERROR_RANGE_NUMBER);
    }
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(PRINT_STRING.BONUS_NUMBER, (bonusNumber) => {
      this.bonusNumber = this.convertBonusNumbers(bonusNumber);
      this.validateBonusNumber(this.bonusNumber);
    });
  }

  convertBonusNumbers(bonusNumber) {
    return [Number(bonusNumber)];
  }

  validateBonusNumber(bonusNumber) {
    this.validateBonusNumberDuple(bonusNumber);
  }

  validateBonusNumberDuple(bonusNumber) {
    for (let i = 0; i < bonusNumber.length; i++) {
      if (this.winningNumber.indexOf(bonusNumber[i]) !== -1)
        throw Error(PRINT_ERROR_STRING.ERROR_DUPLE_NUMBER);
    }
  }

  play() {
    this.inputBuyAmount();
  }
}

const app = new App();
app.play();
module.exports = App;
