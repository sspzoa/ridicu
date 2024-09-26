import type { Word } from '@/types/Word';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

const useWordSubmit = (words: string[], setWords: React.Dispatch<React.SetStateAction<string[]>>) => {
  const router = useRouter();

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await fetch('/api/openai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ words }),
        });
        const data = await response.json();
        const storedWordList = localStorage.getItem('wordList');
        const existingWords: Word[] = storedWordList ? JSON.parse(storedWordList) : [];
        const newWordList = [...existingWords, ...data.result];
        localStorage.setItem('wordList', JSON.stringify(newWordList));
        setWords([]);
        router.push('/');
      } catch (error) {
        console.error('Error:', error);
      }
    },
    [words, router, setWords],
  );

  return { handleSubmit };
};

export default useWordSubmit;
