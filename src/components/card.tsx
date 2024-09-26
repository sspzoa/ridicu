import type { Word } from '@/types/Word';
import React from 'react';

export function Card({ word, pronunciation, mnemonic, example, meaning }: Word): JSX.Element {
  const highlightedExample = example.split(new RegExp(`(${word})`, 'gi')).map((part, index) =>
    part.toLowerCase() === word.toLowerCase() ? (
      <strong key={index} className="text-core-accent">
        {part}
      </strong>
    ) : (
      <React.Fragment key={index}>{part}</React.Fragment>
    ),
  );

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-spacing-700 rounded-radius-600 border border-line-outline bg-components-fill-standard-primary p-spacing-700 shadow-xl">
      <div className="flex flex-col items-center justify-center gap-spacing-400">
        <strong className="text-center text-title text-content-standard-secondary">{mnemonic}</strong>
        <div className="flex flex-col items-center justify-center">
          <strong className="text-center text-title text-core-accent">{word}</strong>
          <span className="text-center text-body text-content-standard-secondary">[{pronunciation}]</span>
          <span className="text-center text-body text-content-standard-secondary">{highlightedExample}</span>
        </div>
      </div>
      <div className="group animate-pulse rounded-radius-300 bg-solid-translucent-red hover:animate-none hover:bg-components-fill-standard-primary">
        <span className="text-title text-content-standard-tertiary opacity-0 group-hover:opacity-100">{meaning}</span>
      </div>
    </div>
  );
}
