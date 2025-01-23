import React, { useState } from "react";
import { IonContent, IonCard, IonButton, IonToolbar, IonLoading } from "@ionic/react";
import QuizListItem from "./QuizListItem";
import { QuizListProps } from "./quizTypings";

const QuizList: React.FC<QuizListProps> = ({ questions }) => {
    console.log("QuizList Questions: ", questions);
    const [currIndex, setCurrIndex] = useState(0);

    const handleNext = () => {
        if (currIndex === questions.length - 1) {
            setCurrIndex(0);
            return;
        }
        setCurrIndex((prev) => prev + 1);
    };

    const handlePrev = () => {
        if (currIndex === 0) {
            return;
        }
        setCurrIndex((prev) => prev - 1);
    };

    if (questions.length === 0) {
        return <IonLoading>Questions not found</IonLoading>;
    }

    const currentQuestion = questions[currIndex];
    

    return (
        <IonContent fullscreen>
                <IonCard key={currIndex}>
                <QuizListItem question={currentQuestion} />
                </IonCard>
                <IonToolbar >
                    <IonButton disabled={currIndex === 0 ? true: false} onClick={handlePrev}>Previous</IonButton>
                    <IonButton disabled={currIndex === questions.length - 1 ? true : false} onClick={handleNext}>Next</IonButton>
                </IonToolbar>
        </IonContent>
    );
};

export default QuizList;
