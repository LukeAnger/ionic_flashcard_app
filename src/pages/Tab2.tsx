import React from 'react';
import { useStore } from '../context/store';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { increment } from '../context/actions/counterActions';

const Tab2: React.FC = () => {
  const { state, dispatch } = useStore(); // Access state and dispatch from the store

  console.log('Tab2 State:', state);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
        <IonButton onClick={() => dispatch({ type: 'INCREMENT'})}>Increment</IonButton> {/* Dispatch the increment action */}
        <IonButton onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</IonButton> {/* Dispatch the decrement action */}
        <IonButton onClick={() => dispatch({ type: 'RESET' })}>Reset</IonButton> {/* Dispatch the reset action */}
        <p>Count: {state.count}</p>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
