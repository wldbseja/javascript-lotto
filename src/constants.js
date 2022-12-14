const LOTTO_ONE_TICKET = 1000;

const LOTTO_LENGTH = 6;

const PRINT_STRING = {
  INPUT_BUY_AMOUNT: '구입금액을 입력해 주세요.\n',
  PRINT_AMOUNT_COUNT: (amountCount) => `\n${amountCount}개를 구매했습니다.`,
  INPUT_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  PRINT_WINNING_PHRASES: '\n당첨 통계\n---',
};

const ERROR_PRINT_STRING = {
  ERROR_BUY_AMOUNT: '[ERROR] 구입 금액이 잘못되었습니다.',
  ERROR_NUMBER_LENGTH: '[ERROR] 로또 번호 길이가 맞지 않습니다.',
  ERROR_NUMBER_DUPLE: '[ERROR] 로또 번호가 중복 되었습니다.',
  ERROR_NUMBER_RANGE: '[ERROR] 로또 번호의 범위가 맞지 않습니다.',
};

const PRINT_WINNING_STATISTICS = [
  (number) => `3개 일치 (5,000원) - ${number}개`,
  (number) => `4개 일치 (50,000원) - ${number}개`,
  (number) => `5개 일치 (1,500,000원) - ${number}개`,
  (number) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${number}개`,
  (number) => `6개 일치 (2,000,000,000원) - ${number}개`,
];

const PRINT_REVENUE = [(number) => `총 수익률은 ${number}%입니다.`];

module.exports = {
  LOTTO_ONE_TICKET,
  LOTTO_LENGTH,
  PRINT_STRING,
  ERROR_PRINT_STRING,
  PRINT_WINNING_STATISTICS,
  PRINT_REVENUE,
};
