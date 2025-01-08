import React from "react";
import { useFlashcardStore, FlashcardStoreProvider } from "../context/store/flashcardStore";
import {
  setCategory,
  nextCard,
  reset,
} from "../context/actions/flashcardActions";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import './Tab3.css';
import { randomizeArray } from "../utils/flashcardFuncs";

const Tab3: React.FC = () => {
  const { state, dispatch } = useFlashcardStore();
  const currentFlashcard = state.flashcards[state.currentIndex];
  if (state.category) {
    currentFlashcard.options = randomizeArray(currentFlashcard?.options);
  }
  const handleAnswer = (isCorrect: boolean) => {
    dispatch(nextCard(isCorrect));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Flashcards</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {state.category === null ? (
          <div>
            <h2>Select a Category</h2>
            {["Python", "Korean"].map((categoryName) => (
              <IonButton
                key={categoryName}
                onClick={() => dispatch(setCategory(categoryName))}
              >
                {categoryName}
              </IonButton>
            ))}
          </div>
        ) : currentFlashcard ? (
          <IonCard>
            <IonCardContent>
              <h3 className="question">{currentFlashcard.question}</h3>
              {currentFlashcard.options.map((option: any) => (
                <IonButton
                  className="option"
                  key={option.id}
                  onClick={() => handleAnswer(option.isCorrect)}
                  expand="block"
                >
                  {option.text}
                </IonButton>
              ))}
            </IonCardContent>
          </IonCard>
        ) : (
          <div>
            <h2>Quiz Complete!</h2>
            <p>
              Your score: {state.score} / {state.flashcards.length}
            </p>
            <IonButton onClick={() => dispatch(reset())}>Restart</IonButton>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
