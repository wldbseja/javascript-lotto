const LOTTO_ONE_TICKET = 1000;

const PRINT_STRING = {
  INPUT_BUY_AMOUNT: '구입금액을 입력해 주세요.\n',
  BUY_LOTTO_COUNT: (buyLottoCount) => `${buyLottoCount}개를 구매했습니다.`,
  INPUT_WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  WINNING_PHRASE: '\n당첨 통계\n---',
};

module.exports = { LOTTO_ONE_TICKET, PRINT_STRING };
