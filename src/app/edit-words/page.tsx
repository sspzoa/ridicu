'use client';

import useWordSubmit from '@/hooks/useWordSubmit';
import useWords from '@/hooks/useWords';
import Link from 'next/link';
import type React from 'react';
import { useState } from 'react';

export default function EditWords() {
  const {
    newWords,
    setNewWords,
    existingWords,
    newWord,
    setNewWord,
    handleAddWord,
    handleRemoveNewWord,
    handleRemoveExistingWord,
  } = useWords();
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit: originalHandleSubmit } = useWordSubmit(newWords, setNewWords);

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    await originalHandleSubmit(e);
    setIsLoading(false);
  };

  return (
    <div className="w-full flex justify-center items-start py-spacing-700 px-spacing-400 h-[100dvh]">
      <div className="w-full max-w-[500px] flex flex-col justify-start items-center gap-spacing-700">
        <strong className="text-title">단어 추가</strong>
        <div className="w-full flex flex-row gap-spacing-200 ">
          <input
            type="text"
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
            className="w-full border border-line-outline px-spacing-400 py-spacing-200 bg-components-fill-standard-primary text-label text-content-standard-primary rounded-radius-300"
            placeholder="새 단어 입력"
          />
          <button
            type="button"
            onClick={handleAddWord}
            className="flex-shrink-0 group px-spacing-400 py-spacing-200 rounded-radius-300 border border-line-outline text-center bg-core-accent-translucent hover:bg-core-accent">
            <span className="text-label text-content-standard-primary group-hover:text-content-inverted-primary">
              단어 추가
            </span>
          </button>
        </div>
        <div className="w-full flex flex-col justify-between items-start gap-spacing-200">
          {newWords.map((word, index) => (
            <div key={index} className="w-full flex flex-row gap-spacing-200 justify-between items-center">
              <div className="w-full px-spacing-400 py-spacing-200 border-line-outline border bg-components-fill-standard-primary rounded-radius-300">
                <span className="text-label">{word}</span>
              </div>
              <button
                type="button"
                onClick={() => handleRemoveNewWord(index)}
                className="flex-shrink-0  group px-spacing-400 py-spacing-200 rounded-radius-300 border border-line-outline text-center bg-solid-translucent-red hover:bg-solid-red">
                <span className="text-label text-content-standard-primary group-hover:text-content-inverted-primary">
                  삭제
                </span>
              </button>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="w-full flex flex-row gap-spacing-200">
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full group px-spacing-400 py-spacing-200 rounded-radius-300 border border-line-outline text-center 
              ${
                isLoading
                  ? 'bg-core-accent text-content-inverted-primary cursor-not-allowed'
                  : 'bg-core-accent-translucent hover:bg-core-accent'
              } transition-colors duration-200`}>
            <span
              className={`text-label ${isLoading ? 'text-content-inverted-primary' : 'text-content-standard-primary group-hover:text-content-inverted-primary'}`}>
              {isLoading ? '처리 중...' : '결과 생성 및 저장'}
            </span>
          </button>
          <Link
            href="/"
            className="w-full px-spacing-400 py-spacing-200 rounded-radius-300 border border-line-outline text-label text-content-standard-primary hover:text-content-inverted-primary text-center bg-core-accent-translucent hover:bg-core-accent">
            홈으로 돌아가기
          </Link>
        </form>
        <div className="w-full flex flex-col justify-between items-center gap-spacing-700">
          <strong className="text-title">단어 목록</strong>
          <div className="w-full flex flex-col justify-center items-center gap-spacing-200">
            {existingWords.map((word, index) => (
              <div key={index} className="w-full flex flex-row gap-spacing-200 justify-between items-center">
                <div className="w-full px-spacing-400 py-spacing-200 border-line-outline border bg-components-fill-standard-primary rounded-radius-300">
                  <span className="text-label">{word.word}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveExistingWord(index)}
                  className="flex-shrink-0  group px-spacing-400 py-spacing-200 rounded-radius-300 border border-line-outline text-center bg-solid-translucent-red hover:bg-solid-red">
                  <span className="text-label text-content-standard-primary group-hover:text-content-inverted-primary">
                    삭제
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
