import type { Word } from '@/types/Word';
import { useEffect, useState } from 'react';

export function useCardCarousel(initialWords: Word[]) {
  const [words, setWords] = useState<Word[]>(initialWords);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setWords(initialWords);
    setCurrentIndex(0);
  }, [initialWords]);

  const nextCard = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  const prevCard = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);

  return {
    currentWord: words[currentIndex],
    currentIndex,
    totalWords: words.length,
    nextCard,
    prevCard,
  };
}
