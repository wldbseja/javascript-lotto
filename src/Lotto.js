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

  makeStatistics(winningNumber, bonusNumber) {
    let winningCount = 0;
    for (let i = 0; i < winningNumber.length; i++) {
      if (this.#numbers.includes(winningNumber[i])) {
        winningCount++;
      }
    }
  }
}

module.exports = Lotto;
