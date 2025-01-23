import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonButton,
} from "@ionic/react";
import { useStore } from "../context/store/index";
import { getQuestions } from "../utils/getQuestions";

const CustomizeQuiz: React.FC = () => {
  const { state } = useStore();
  const [selectedConcepts, setSelectedConcepts] = useState<string[]>([]);

  const handleConceptSelect = (concept: string) => {
    setSelectedConcepts((prev) =>
      prev.includes(concept)
        ? prev.filter((c) => c !== concept) // Deselect
        : [...prev, concept] // Select
    );
  };

  const handleSubmit = async () => {
    try {
      const questionsResponse = await getQuestions({
        course_id: "37",
        user_id: "9",
        question_count: 10,
        selected_concepts: selectedConcepts,
      });

      // Navigate to flashcard lesson with fetched questions
      console.log("Fetched Questions:", questionsResponse.questions);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Customize Your Quiz</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonAccordionGroup>
          {Object.entries(state.topicMapping).map(([topic, concepts]) => (
            <IonAccordion value={topic} key={topic}>
              <IonItem slot="header">
                <IonLabel>{topic}</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                {concepts.map((concept) => (
                  <IonItem key={concept} lines="none">
                    <IonCheckbox
                      slot="start"
                      checked={selectedConcepts.includes(concept)}
                      onIonChange={() => handleConceptSelect(concept)}
                      labelPlacement="end"
                    >
                      {concept}
                    </IonCheckbox>
                  </IonItem>
                ))}
              </div>
            </IonAccordion>
          ))}
        </IonAccordionGroup>
        <IonButton
          expand="block"
          disabled={selectedConcepts.length === 0}
          onClick={handleSubmit}
        >
          Get Flashcards
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CustomizeQuiz;
