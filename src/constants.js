const LOTTO_ONE_TICKET = 1000;

const PRINT_STRING = {
  INPUT_BUY_AMOUNT: '구입금액을 입력해 주세요.\n',
  BUY_LOTTO_COUNT: (buyLottoCount) => `${buyLottoCount}개를 구매했습니다.`,
  INPUT_WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  WINNING_PHRASE: '\n당첨 통계\n---',
};

const PRINT_ERROR_STRING = {
  ERROR_BUY_AMOUNT: '[ERROR] 구입 금액은 천 원 단위로 입력해야 합니다. ',
  ERROR_NUMBER_RANGE: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  ERROR_NUMBER_DUPLE: '[ERROR] 로또 번호가 중복 되었습니다.',
  ERROR_NUMBER_LENGTH: '[ERROR] 로또 번호의 길이가 맞지 않습니다.',
};

module.exports = { LOTTO_ONE_TICKET, PRINT_STRING, PRINT_ERROR_STRING };
