import React from "react";
import { IonItem, IonLabel, IonButton, IonCard, IonCardContent } from "@ionic/react";
import { Question } from "./quizTypings";

// Define the props explicitly
interface QuizListItemProps {
  question: Question;
}

const QuizListItem: React.FC<QuizListItemProps> = ({ question }) => {
  return (
      <IonCardContent>
        <IonLabel>
          <h3>{question.Question}</h3>
        </IonLabel>
        <p>A: {question.A}</p>
        <p>B: {question.B}</p>
        <p>C: {question.C}</p>
        <p>D: {question.D}</p>
      </IonCardContent>
  );
};

export default QuizListItem;
