const MissionUtils = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers.sort((a, b) => a - b);
    this.printLottoArray(this.#numbers);
  }

  printLottoArray(lottoArray) {
    MissionUtils.Console.print(`[${lottoArray}]`);
  }
}

module.exports = Lotto;
