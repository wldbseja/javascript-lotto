const MissionUtils = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
    this.PrintLottoArray(this.#numbers);
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  PrintLottoArray(lottoArray) {
    MissionUtils.Console.print(lottoArray);
  }

  getRankIndex(winningNumbers, bonusNumber) {
    let count = 0;
    for (let i = 0; i < winningNumbers.length; i++) {
      if (this.#numbers.includes(winningNumbers[i])) count++;
    }
    if (count === 6) return 4;
    if (count === 3) return 0;
    if (count === 4) return 1;
    if (count === 5) {
      if (this.#numbers.includes(bonusNumber)) {
        return 3;
      } else {
        return 2;
      }
    }
    return 5;
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
