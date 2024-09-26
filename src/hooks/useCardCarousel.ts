import type { Word } from '@/types/Word';
import { useState } from 'react';

export function useCardCarousel(words: Word[]) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  const prevCard = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);

  return {
    currentWord: words[currentIndex],
    currentIndex,
    nextCard,
    prevCard,
  };
}
