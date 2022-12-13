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
    return this.makeRankingArray(winningCount, bonusNumber);
  }

  makeRankingArray(winningCount, bonusNumber) {
    let rankArray = [0, 0, 0, 0, 0];
    for (let i = 0; i < bonusNumber.length; i++) {
      if (winningCount === 6) {
        rankArray[0] = 1;
      }

      if (winningCount === 5) {
        if (this.#numbers.includes(bonusNumber[i])) {
          rankArray[1] = 1;
        }
        if (!this.#numbers.includes(bonusNumber[i])) {
          rankArray[2] = 1;
        }
      }

      if (winningCount === 4) {
        rankArray[3] = 1;
      }

      if (winningCount === 3) {
        rankArray[4] = 1;
      }
    }
    return rankArray;
  }
}

module.exports = Lotto;
