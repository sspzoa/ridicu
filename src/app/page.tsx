'use client';

import { CardCarousel } from '@/components/cardCarousel';
import type { Word } from '@/types/Word';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home(): JSX.Element {
  const [wordList, setWordList] = useState<Word[]>([]);

  useEffect(() => {
    const storedWordList = localStorage.getItem('wordList');
    if (storedWordList) {
      setWordList(JSON.parse(storedWordList));
    }
  }, []);

  return (
    <div className="flex h-[100dvh] items-center justify-center">
      {wordList.length > 0 ? (
        <CardCarousel words={wordList} />
      ) : (
        <div className="flex flex-col justify-center items-center gap-spacing-400">
          <p className="text-center text-label">저장된 단어가 없습니다.</p>
          <Link href="/edit-words">
            <strong className="text-center text-label">단어 목록</strong>
          </Link>
        </div>
      )}
    </div>
  );
}
