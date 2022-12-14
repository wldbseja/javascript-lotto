const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
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
        this.amountCount = this.makeAmountCount(buyAmount);
        MissionUtils.Console.print(
          PRINT_STRING.PRINT_AMOUNT_COUNT(this.amountCount)
        );
        this.makeLottoArray(this.amountCount);
        this.inputWinningNumbers();
      }
    );
  }

  validateBuyAmount(buyAmount) {
    if (buyAmount % LOTTO_ONE_TICKET !== 0)
      throw Error(ERROR_PRINT_STRING.ERROR_BUY_AMOUNT);
  }

  makeAmountCount(buyAmount) {
    return buyAmount / LOTTO_ONE_TICKET;
  }

  makeLottoArray(amountCount) {
    this.lottoArray = [];
    for (let i = 0; i < amountCount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottoArray.push(new Lotto(numbers));
    }
  }

  inputWinningNumbers() {
    MissionUtils.Console.readLine(
      PRINT_STRING.INPUT_WINNING_NUMBERS,
      (winningNumbers) => {
        this.winningNumbers = this.convertWinningNumbers(winningNumbers);
        this.validateWinningNumbers(this.winningNumbers);
        this.inputBonusNumber();
      }
    );
  }

  convertWinningNumbers(winningNumbers) {
    return winningNumbers.split(',').map(Number);
  }

  validateWinningNumbers(winningNumbers) {
    this.validateNumberLength(winningNumbers);
    this.validateNumberDuplicate(winningNumbers);
    for (let i = 0; i < winningNumbers.length; i++) {
      this.validateNumberRange(winningNumbers[i]);
    }
  }

  validateNumberLength(winningNumbers) {
    if (winningNumbers.length !== 6)
      throw Error(ERROR_PRINT_STRING.ERROR_NUMBER_LENGTH);
  }

  validateNumberDuplicate(numbers) {
    const setNumber = new Set(numbers);
    if (setNumber.size !== numbers.length)
      throw Error(ERROR_PRINT_STRING.ERROR_NUMBER_DUPLE);
  }

  validateNumberRange(numbers) {
    if (!(numbers >= 1 && numbers <= 45))
      throw Error(ERROR_PRINT_STRING.ERROR_NUMBER_RANGE);
  }

  inputBonusNumber() {
    MissionUtils.Console.readLine(
      PRINT_STRING.INPUT_BONUS_NUMBER,
      (bonusNumber) => {
        this.bonusNumber = Number(bonusNumber);
        this.validateNumberDuplicate([
          ...this.winningNumbers,
          this.bonusNumber,
        ]);
      }
    );
  }

  play() {
    this.inputBuyAmount();
  }
}

const app = new App();
app.play();
module.exports = App;
