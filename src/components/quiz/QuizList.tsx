import React, { useState } from "react";
import { IonContent, IonCard, IonButton, IonToolbar, IonLoading, IonFooter } from "@ionic/react";
import QuizListItem from "./QuizListItem";
import Explanation from "./Explanation";
import { QuizListProps } from "./quizTypings";

const QuizList: React.FC<QuizListProps> = ({ questions }) => {
    // console.log("QuizList Questions: ", questions);
    const [currIndex, setCurrIndex] = useState(0);
    const [currSelectedAnswer, setCurrSelectedAnswer] = useState("");
    const [showExplanation, setShowExplanation] = useState(false);
    const [currExplanation, setCurrExplanation] = useState("");
    const [showHint, setShowHint] = useState(false);

    const handleNext = () => {
        if (currIndex === questions.length - 1) {
            setCurrIndex(0);
            return;
        }
        setCurrIndex((prev) => prev + 1);
        setCurrExplanation("");
        setShowExplanation(false);
        setCurrSelectedAnswer("");
    };

    const handlePrev = () => {
        if (currIndex === 0) {
            return;
        }
        setCurrIndex((prev) => prev - 1);
    };

    const handleSelectAnswer = (letter: string) => {
        setCurrSelectedAnswer(letter);
        setCurrExplanation(questions[currIndex]["Explanation for Options"][letter]);
        setShowExplanation(true);
    }
    
    const handleShowExplanation = () => {
        setShowExplanation(!showExplanation);
    }

    const handleShowHint = () => {
        setShowHint(!showHint);
    }

    if (questions.length === 0) {
        return <IonLoading>Questions not found</IonLoading>;
    }

    const currentQuestion = questions[currIndex];
    

    return (
        <>
            <IonContent fullscreen>
                <IonCard id="quiz-card" key={currIndex}>
                    <QuizListItem 
                        question={currentQuestion} 
                        handleSelectAnswer={handleSelectAnswer} 
                        currSelectedAnswer={currSelectedAnswer} 
                        showExplanation={showExplanation}
                        showHint={showHint}
                        handleShowExplanation={handleShowExplanation}
                        handleShowHint={handleShowHint}
                        />
                </IonCard>
                
                <Explanation explanation={currExplanation} showExplanation={showExplanation} />
                
            </IonContent>
            <IonFooter >
                <IonToolbar id="quiz-footer" >
                    {/* <IonButton disabled={currIndex === 0 ? true: false} onClick={handlePrev}>Previous</IonButton> */}
                    <IonButton slot="secondary" onClick={handleShowHint}>
                        Show Hint
                    </IonButton>
                    <IonButton slot="primary" disabled={currIndex === questions.length - 1 ? true : false} onClick={handleNext}>
                        Continue
                    </IonButton>
                </IonToolbar>
            </IonFooter>
        </>
    );
};

export default QuizList;
