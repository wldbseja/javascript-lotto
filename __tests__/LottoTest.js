const Lotto = require('../src/Lotto');

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test('getRankIndex', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    expect(lotto.getRankIndex([1, 2, 3, 7, 8, 9], 10)).toEqual(4);
    expect(lotto.getRankIndex([1, 2, 3, 4, 8, 9], 10)).toEqual(3);
    expect(lotto.getRankIndex([1, 2, 3, 4, 5, 9], 10)).toEqual(2);
    expect(lotto.getRankIndex([1, 2, 3, 4, 5, 9], 6)).toEqual(1);
    expect(lotto.getRankIndex([1, 2, 3, 4, 5, 6], 9)).toEqual(0);
    expect(lotto.getRankIndex([7, 8, 9, 10, 11, 12], 13)).toEqual(5);
  });

  // 아래에 추가 테스트 작성 가능
});
