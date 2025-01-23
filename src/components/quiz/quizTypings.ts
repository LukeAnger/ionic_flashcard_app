export interface Question {
  Question: string;
  A: string;
  B: string;
  C: string;
  D: string;
  ["Correct Answer"]: string;
  ["Moment ID"]: number;
  ["Lecture ID"]: number;
  Topics: string[];
  ["Question ID"]: string;
  Reported: boolean;
  Hint: string;
  ["Explanation For Options"]: {
      A: string;
      B: string;
      C: string;
      D: string;
  };
  ["Match Count"]: number;
}

export interface Answer {
  answer: string;
  selected: boolean;
  correct: boolean;
  handleSelectAnswer: (answer: string) => void;
}
  
export interface QuizListProps {
  questions: Question[];
}

export interface QuizListItemProps {
  question: Question;
  handleSelectAnswer: (answer: string) => void;
}

export interface AnswerProps {
  answer: Answer;
}