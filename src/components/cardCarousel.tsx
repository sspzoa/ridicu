import { Card } from '@/components/card';
import { useCardCarousel } from '@/hooks/useCardCarousel';
import { words } from '@/types/Word';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function CardCarousel(): JSX.Element {
  const { currentWord, currentIndex, nextCard, prevCard } = useCardCarousel(words);

  return (
    <div className="m-spacing-400 flex w-full flex-col items-center justify-center gap-spacing-400 md:w-auto">
      <Card {...currentWord} />
      <div className="mb-spacing-400 text-content-standard-secondary">
        {currentIndex + 1} / {words.length}
      </div>
      <div className="fixed bottom-spacing-1000 flex flex-row items-center justify-center gap-spacing-700">
        <button onClick={prevCard} type="button" aria-label="Previous card">
          <div className="group flex h-[40px] w-[40px] items-center justify-center rounded-radius-full border-line-outline bg-core-accent-translucent p-spacing-200 duration-300 ease-in-out hover:bg-core-accent">
            <FontAwesomeIcon
              className="text-content-standard-primary duration-300 ease-in-out group-hover:text-content-inverted-primary"
              icon={faChevronLeft}
            />
          </div>
        </button>
        <button onClick={nextCard} type="button" aria-label="Next card">
          <div className="group flex h-[40px] w-[40px] items-center justify-center rounded-radius-full border-line-outline bg-core-accent-translucent p-spacing-200 duration-300 ease-in-out hover:bg-core-accent">
            <FontAwesomeIcon
              className="text-content-standard-primary duration-300 ease-in-out group-hover:text-content-inverted-primary"
              icon={faChevronRight}
            />
          </div>
        </button>
      </div>
    </div>
  );
}
