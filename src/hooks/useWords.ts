import type { Word } from '@/types/Word';
import { useCallback, useEffect, useState } from 'react';

const useWords = () => {
  const [newWords, setNewWords] = useState<string[]>([]);
  const [existingWords, setExistingWords] = useState<Word[]>([]);
  const [newWord, setNewWord] = useState('');

  useEffect(() => {
    const storedWordList = localStorage.getItem('wordList');
    if (storedWordList) {
      setExistingWords(JSON.parse(storedWordList));
    }
  }, []);

  const handleAddWord = useCallback(() => {
    if (newWord.trim() !== '') {
      setNewWords((prevWords) => [...prevWords, newWord.trim()]);
      setNewWord('');
    }
  }, [newWord]);

  const handleRemoveNewWord = useCallback((index: number) => {
    setNewWords((prevWords) => prevWords.filter((_, i) => i !== index));
  }, []);

  const handleRemoveExistingWord = useCallback((index: number) => {
    setExistingWords((prevWords) => {
      const updatedWords = prevWords.filter((_, i) => i !== index);
      localStorage.setItem('wordList', JSON.stringify(updatedWords));
      return updatedWords;
    });
  }, []);

  return {
    newWords,
    setNewWords,
    existingWords,
    setExistingWords,
    newWord,
    setNewWord,
    handleAddWord,
    handleRemoveNewWord,
    handleRemoveExistingWord,
  };
};

export default useWords;
