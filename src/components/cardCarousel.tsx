import { Card } from '@/components/card';
import { useCardCarousel } from '@/hooks/useCardCarousel';
import type { Word } from '@/types/Word';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface CardCarouselProps {
  words: Word[];
}

export function CardCarousel({ words }: CardCarouselProps): JSX.Element {
  const { currentWord, currentIndex, totalWords, nextCard, prevCard } = useCardCarousel(words);

  if (words.length === 0) {
    return <div className="text-center">단어가 없습니다.</div>;
  }

  return (
    <div className="m-spacing-400 md:min-w-[500px] flex w-full flex-col items-center justify-center gap-spacing-400 md:w-auto">
      <span className="text-label text-content-standard-tertiary">원래 단어는 어이없게 외우는 겁니다</span>
      <Card {...currentWord} />
      <div className="mb-spacing-400 text-content-standard-secondary">
        {currentIndex + 1} / {totalWords}
      </div>
      <Link href="/edit-words">
        <strong className="text-center text-label">단어 목록</strong>
      </Link>
      <div className="fixed bottom-spacing-1000 flex flex-row items-center justify-center gap-spacing-700">
        <button onClick={prevCard} type="button" aria-label="Previous card">
          <div className="group flex h-[40px] w-[40px] items-center justify-center rounded-radius-full border border-line-outline bg-core-accent-translucent p-spacing-200 hover:bg-core-accent">
            <FontAwesomeIcon
              className="text-content-standard-primary group-hover:text-content-inverted-primary"
              icon={faChevronLeft}
            />
          </div>
        </button>
        <button onClick={nextCard} type="button" aria-label="Next card">
          <div className="group flex h-[40px] w-[40px] items-center justify-center rounded-radius-full border border-line-outline bg-core-accent-translucent p-spacing-200 hover:bg-core-accent">
            <FontAwesomeIcon
              className="text-content-standard-primary group-hover:text-content-inverted-primary"
              icon={faChevronRight}
            />
          </div>
        </button>
      </div>
    </div>
  );
}
