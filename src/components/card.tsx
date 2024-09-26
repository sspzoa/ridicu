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
    <div className="w-full h-full flex flex-col gap-spacing-700 justify-center items-center border border-line-outline rounded-radius-600 shadow-xl bg-components-fill-standard-primary p-spacing-700">
      <div className="flex flex-col gap-spacing-400 justify-center items-center">
        <strong className="text-title text-content-standard-secondary text-center">{mnemonic}</strong>
        <div className="flex flex-col justify-center items-center">
          <strong className="text-title text-core-accent text-center">{word}</strong>
          <span className="text-body text-content-standard-secondary text-center">/{pronunciation}/</span>
          <span className="text-body text-content-standard-secondary text-center">{highlightedExample}</span>
        </div>
      </div>
      <div className="group animate-pulse hover:animate-none bg-solid-translucent-red rounded-radius-300 hover:bg-components-fill-standard-primary ease-in-out duration-300">
        <span className="text-title text-content-standard-tertiary opacity-0 group-hover:opacity-100 ease-in-out duration-300">
          {meaning}
        </span>
      </div>
    </div>
  );
}
