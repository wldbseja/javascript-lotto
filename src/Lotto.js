const MissionUtils = require('@woowacourse/mission-utils');
const { PRINT_ERROR_STRING } = require('./constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers.sort((a, b) => a - b);
    this.printLottoNumbers(numbers);
  }

  validateWinningNumbers(winningNumbers) {
    this.winningNumbers = winningNumbers;
    this.validateNumbersLength(this.winningNumbers);
    this.validateNumbersDuple(this.winningNumbers);
    this.validateNumbersRange(this.winningNumbers);
  }

  validateNumbersLength(winningNumbers) {
    if (winningNumbers.length !== 6) {
      throw Error(PRINT_ERROR_STRING.ERROR_NUMBER_LENGTH);
    }
  }

  validateNumbersDuple(winningNumbers) {
    let setWinning = new Set(winningNumbers);
    if (setWinning.size !== 6) {
      throw Error(PRINT_ERROR_STRING.ERROR_NUMBER_DUPLE);
    }
  }

  validateNumbersRange(winningNumbers) {
    for (let i = 0; i < winningNumbers.length; i++) {
      if (!(winningNumbers[i] > 0 && winningNumbers[i] < 46)) {
        throw Error(PRINT_ERROR_STRING.ERROR_NUMBER_RANGE);
      }
    }
  }

  validateBonusNumber(bonusNumber) {
    this.bonusNumber = bonusNumber;
    this.validateBonusNumbersDuple(this.bonusNumber, this.winningNumbers);
  }

  validateBonusNumbersDuple(bonusNumber, winningNumbers) {
    for (let i = 0; i < bonusNumber.length; i++) {
      if (winningNumbers.indexOf(bonusNumber[i]) !== -1) {
        throw Error(PRINT_ERROR_STRING.ERROR_NUMBER_DUPLE);
      }
    }
  }

  printLottoNumbers(numbers) {
    MissionUtils.Console.print(numbers);
  }
}

module.exports = Lotto;
