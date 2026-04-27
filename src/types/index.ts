export interface StudyData {
  overview: string[];
  summaries: SummarySection[];
  flashcards: Flashcard[];
  mcqs: MCQ[];
  shortAnswers: ShortAnswer[];
  revisionSheet: string[];
  comparisonTable: string[];
}

export interface SummarySection {
  title: string;
  content: string[];
}

export interface Flashcard {
  question: string;
  answer: string;
  topic?: string;
}

export interface MCQ {
  id: number;
  question: string;
  options: Record<string, string>;
  answer: string;
  explanation: string;
}

export interface ShortAnswer {
  question: string;
  guide: string;
}

export interface Progress {
  completedFlashcards: string[];
  difficultCards: string[];
  quizScores: QuizScore[];
  bookmarks: string[];
  weakTopics: string[];
  lastVisited: string | null;
}

export interface QuizScore {
  type: string;
  score: number;
  total: number;
  date: string;
}
