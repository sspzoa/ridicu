import { Card } from '@/components/card';
import { useCardCarousel } from '@/hooks/useCardCarousel';
import { words } from '@/types/Word';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function CardCarousel(): JSX.Element {
  const { currentWord, nextCard, prevCard } = useCardCarousel(words);

  return (
    <div className="w-full md:w-auto flex flex-col justify-center items-center gap-spacing-400 m-spacing-400">
      <Card {...currentWord} />
      <div className="fixed bottom-spacing-1000 flex flex-row gap-spacing-700 justify-center items-center">
        <button onClick={prevCard} type="button" aria-label="Previous card">
          <div className="group w-[40px] h-[40px] flex justify-center items-center rounded-radius-full p-spacing-200 border-line-outline bg-core-accent-translucent hover:bg-core-accent duration-300 ease-in-out">
            <FontAwesomeIcon
              className="group-hover:text-content-inverted-primary text-content-standard-primary duration-300 ease-in-out"
              icon={faChevronLeft}
            />
          </div>
        </button>
        <button onClick={nextCard} type="button" aria-label="Next card">
          <div className="group w-[40px] h-[40px] flex justify-center items-center rounded-radius-full p-spacing-200 border-line-outline bg-core-accent-translucent hover:bg-core-accent duration-300 ease-in-out">
            <FontAwesomeIcon
              className="group-hover:text-content-inverted-primary text-content-standard-primary duration-300 ease-in-out"
              icon={faChevronRight}
            />
          </div>
        </button>
      </div>
    </div>
  );
}
