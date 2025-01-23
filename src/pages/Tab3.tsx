import React, { useEffect, useState } from "react";
import { useStore } from "../context/store/";
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
import QuizList from "../components/quiz/QuizList";


const Tab3: React.FC = () => {
  const { state } = useStore();
  console.log("TAB 3 FLASHCARE STATE STORE: ", state);



  return (
    <IonPage>
      <IonContent fullscreen>
        <QuizList questions={state.questions} />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
