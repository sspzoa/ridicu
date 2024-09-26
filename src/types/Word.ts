export interface Word {
  word: string;
  pronunciation: string;
  mnemonic: string;
  example: string;
  meaning: string;
}

export const words: Word[] = [
  {
    word: 'Certificate',
    pronunciation: '서티피킷',
    mnemonic: '서 있는 티켓',
    example: 'She earned a teaching certificate last month.',
    meaning: '증명서, 자격증',
  },
  {
    word: 'Appreciate',
    pronunciation: '어프리시에이트',
    mnemonic: '어? 프리하게 에이(A)',
    example: 'I really appreciate your help with this project.',
    meaning: '감사하다, 고마워하다',
  },
  {
    word: 'Enthusiasm',
    pronunciation: '인듀시애즘',
    mnemonic: '인류의 듀엣 시합 열정',
    example: 'His enthusiasm for the project was contagious.',
    meaning: '열정, 열의',
  },
  {
    word: 'Diligent',
    pronunciation: '딜리전트',
    mnemonic: '딜을 이렇게 전투적으로',
    example: 'She is a diligent student who always completes her homework.',
    meaning: '부지런한, 성실한',
  },
  {
    word: 'Perseverance',
    pronunciation: '퍼서비어런스',
    mnemonic: '퍼서 비어있는 런닝을 계속',
    example: 'His perseverance in the face of adversity was admirable.',
    meaning: '인내, 끈기',
  },
  {
    word: 'Ambition',
    pronunciation: '앰비션',
    mnemonic: '앰뷸런스처럼 빠른 비전',
    example: 'Her ambition drove her to pursue a challenging career.',
    meaning: '야망, 포부',
  },
  {
    word: 'Empathy',
    pronunciation: '엠퍼시',
    mnemonic: '엠티에서 퍼진 따뜻한 마음',
    example: 'Showing empathy towards others can improve relationships.',
    meaning: '공감, 감정이입',
  },
  {
    word: 'Resilience',
    pronunciation: '리질리언스',
    mnemonic: '리듬 있게 질리지 않고 언제나 스마일',
    example: 'Her resilience helped her bounce back from setbacks.',
    meaning: '회복력, 탄력성',
  },
];
