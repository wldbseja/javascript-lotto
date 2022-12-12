const MissionUtils = require('@woowacourse/mission-utils');
const {
  LOTTO_ONE_TICKET,
  PRINT_STRING,
  PRINT_ERROR_STRING,
} = require('./constants');
const Lotto = require('./Lotto');

class App {
  constructor() {}

  inputBuyAmount() {
    MissionUtils.Console.readLine(
      PRINT_STRING.INPUT_BUY_AMOUNT,
      (buyAmount) => {
        this.checkBuyAmount(buyAmount);
        this.buyLottoCount = this.makeLottoCount(buyAmount);
        MissionUtils.Console.print(
          PRINT_STRING.BUY_LOTTO_COUNT(this.buyLottoCount)
        );
        this.generateRandomLottoNumbers(this.buyLottoCount);
        this.inputWinningNumbers();
      }
    );
  }

  checkBuyAmount(buyAmount) {
    if (buyAmount % LOTTO_ONE_TICKET !== 0)
      throw Error(PRINT_ERROR_STRING.ERROR_BUY_AMOUNT);
  }

  makeLottoCount(buyAmount) {
    return buyAmount / LOTTO_ONE_TICKET;
  }

  generateRandomLottoNumbers(buyLottoCount) {
    this.lottoArray = [];
    for (let i = 0; i < buyLottoCount; i++) {
      const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.lottoArray.push(new Lotto(numbers));
    }
  }

  inputWinningNumbers() {
    MissionUtils.Console.readLine(
      PRINT_STRING.INPUT_WINNING_NUMBER,
      (winningNumber) => {
        this.winningNumbers = this.convertWinningNumber(winningNumber);
        this.sendLottoClassWinningNumbers(this.winningNumbers);
        this.inputBonusNumbers();
      }
    );
  }

  convertWinningNumber(winningNumber) {
    return winningNumber.split(',').map(Number);
  }

  sendLottoClassWinningNumbers(winningNumbers) {
    for (let i = 0; i < this.lottoArray.length; i++) {
      this.lottoArray[i].validateWinningNumbers(winningNumbers);
    }
  }

  inputBonusNumbers() {
    MissionUtils.Console.readLine(
      PRINT_STRING.INPUT_BONUS_NUMBER,
      (bonusNumber) => {
        this.bonusNumber = Number(bonusNumber);
        this.sendLottoClassBonusNumbers(this.bonusNumber);
      }
    );
  }

  sendLottoClassBonusNumbers(bonusNumber) {
    let oneLength = this.lottoArray.length - this.lottoArray.length + 1;
    for (let i = 0; i < oneLength; i++) {
      this.lottoArray[i].validateBonusNumber(bonusNumber);
    }
  }

  play() {
    this.inputBuyAmount();
  }
}

const app = new App();
app.play();
module.exports = App;
