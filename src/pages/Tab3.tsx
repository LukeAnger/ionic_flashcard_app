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
import { randomizeArray } from "../utils/flashcardFuncs";


const body: any = {
  "course_id": "37",
  "user_id": "9",
  "question_count": 5,
  "selected_concepts": [
      "decision trees",
      "k-nearest neighbors",
      "logistic regression",
      "support vector machines",
      "feature scaling"
  ]
}

const Tab3: React.FC = () => {
  const { state } = useStore();
  console.log("TAB 3 FLASHCARE STATE STORE: ", state);


  // const getCustomQuestions = () => {
  //   const selectedConcepts = ["linear regression", "logistic regression"];
  //   fetchQuestions({
  //     courseId: "37",
  //     userId: "9",
  //     selectedConcepts,
  //     questionCount: 15,
  //   });
  // };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Flashcards</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        Test
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
