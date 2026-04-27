import { useState, useEffect } from 'react';
import { parseMarkdown } from '../utils/parser';
import { studyPacketRaw } from '../data/studyPacket';
import { StudyData, Progress } from '../types';

const STORAGE_KEY = 'mit812_study_progress';

export const useStore = () => {
  const [data] = useState<StudyData>(() => {
    return parseMarkdown(studyPacketRaw);
  });
  const [progress, setProgress] = useState<Progress>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {
      completedFlashcards: [],
      difficultCards: [],
      quizScores: [],
      bookmarks: [],
      weakTopics: [],
      lastVisited: null
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const toggleBookmark = (topic: string) => {
    setProgress(prev => ({
      ...prev,
      bookmarks: prev.bookmarks.includes(topic)
        ? prev.bookmarks.filter(t => t !== topic)
        : [...prev.bookmarks, topic]
    }));
  };

  const markFlashcard = (id: string, difficulty: 'easy' | 'hard') => {
    setProgress(prev => {
      const completed = [...new Set([...prev.completedFlashcards, id])];
      let difficult = prev.difficultCards;
      if (difficulty === 'hard') {
        difficult = [...new Set([...difficult, id])];
      } else {
        difficult = difficult.filter(d => d !== id);
      }
      return { ...prev, completedFlashcards: completed, difficultCards: difficult };
    });
  };

  const saveQuizScore = (type: string, score: number, total: number) => {
    setProgress(prev => ({
      ...prev,
      quizScores: [...prev.quizScores, { type, score, total, date: new Date().toISOString() }]
    }));
  };

  return {
    data,
    progress,
    toggleBookmark,
    markFlashcard,
    saveQuizScore,
    setProgress
  };
};
