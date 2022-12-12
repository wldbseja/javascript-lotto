const MissionUtils = require('@woowacourse/mission-utils');
const { PRINT_ERROR_STRING } = require('./constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers.sort((a, b) => a - b);
    this.printLottoNumbers(numbers);
  }

  validateNumbers(numbers) {
    this.validateNumbersLength(numbers);
  }

  validateNumbersLength(numbers) {
    if (numbers.length !== 6) {
      throw Error(PRINT_ERROR_STRING.ERROR_NUMBER_LENGTH);
    }
  }

  printLottoNumbers(numbers) {
    MissionUtils.Console.print(numbers);
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
