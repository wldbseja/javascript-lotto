const MissionUtils = require('@woowacourse/mission-utils');

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
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  printLottoNumbers(numbers) {
    MissionUtils.Console.print(numbers);
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
