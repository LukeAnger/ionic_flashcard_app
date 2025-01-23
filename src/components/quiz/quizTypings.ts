export interface Question {
    Question: string;
    A: string;
    B: string;
    C: string;
    D: string;
    CorrectAnswer: string;
    MomentID: number;
    LectureID: number;
    Topics: string[];
    QuestionID: string;
    Reported: boolean;
    Hint: string;
    ExplanationForOptions: {
        A: string;
        B: string;
        C: string;
        D: string;
    };
    MatchCount: number;
  }
  
export interface QuizListProps {
questions: Question[];
}

export interface QuizListItemProps {
  question: Question;
}