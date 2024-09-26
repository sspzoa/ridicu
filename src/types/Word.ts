export interface Word {
  word: string;
  pronunciation: string;
  mnemonic: string;
  example: string;
  meaning: string;
}

export const words: Word[] = [
  {
    word: 'Abundant',
    pronunciation: '어번던트',
    mnemonic: '어? 분 단지가 넘치네',
    example: 'The forest is abundant with wildlife.',
    meaning: '풍부한, 많은',
  },
  {
    word: 'Benevolent',
    pronunciation: '버네벌런트',
    mnemonic: '버네? 벌이 넉넉한 트럭 운전사',
    example: 'She is known for her benevolent smile.',
    meaning: '자비로운, 친절한',
  },
  {
    word: 'Conspicuous',
    pronunciation: '컨스피큐어스',
    mnemonic: '큰 스피커로 큐를 주니 눈에 띄네',
    example: 'He wore a conspicuous hat at the party.',
    meaning: '눈에 띄는, 뚜렷한',
  },
  {
    word: 'Diligent',
    pronunciation: '딜리전트',
    mnemonic: '딜을 이리도 전투적으로!',
    example: 'She is diligent in her studies.',
    meaning: '부지런한, 성실한',
  },
  {
    word: 'Eloquent',
    pronunciation: '엘러퀀트',
    mnemonic: '엘레강스하게 말을 퀸처럼',
    example: 'He gave an eloquent speech.',
    meaning: '유창한, 설득력 있는',
  },
  {
    word: 'Fascinate',
    pronunciation: '패서네이트',
    mnemonic: '패셔니스타를 보니 넋이 나가네',
    example: 'The magician will fascinate the audience.',
    meaning: '매료시키다, 매혹하다',
  },
  {
    word: 'Genuine',
    pronunciation: '제뉴인',
    mnemonic: '제 누이는 진짜야',
    example: 'She showed genuine interest in our work.',
    meaning: '진짜의, 진실한',
  },
  {
    word: 'Harmony',
    pronunciation: '하모니',
    mnemonic: '하모니카 소리에 화목해져',
    example: 'They live together in harmony.',
    meaning: '조화, 화목',
  },
  {
    word: 'Impeccable',
    pronunciation: '임페커블',
    mnemonic: '임팩트가 커! 불가능할 정도로 완벽해',
    example: 'Her performance was impeccable.',
    meaning: '결점 없는, 완벽한',
  },
  {
    word: 'Judicious',
    pronunciation: '주디셔스',
    mnemonic: '주디가 셔서 현명하게 판단해',
    example: 'He made a judicious choice.',
    meaning: '현명한, 신중한',
  },
];
