const MissionUtils = require('@woowacourse/mission-utils');
const { PRINT_ERROR_STRING } = require('./constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers.sort((a, b) => a - b);
    this.printLottoNumbers(numbers);
  }

  validateWinningNumbers(winningNumbers) {
    this.validateNumbersLength(winningNumbers);
    this.validateNumbersDuple(winningNumbers);
    this.validateNumbersRange(winningNumbers);
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

  validateBonusNumber(bonusNumber) {}

  printLottoNumbers(numbers) {
    MissionUtils.Console.print(numbers);
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
