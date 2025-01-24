import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from "react-router-dom";
import './Home.css';

import Header from '../components/header/Header';

const Home: React.FC = () => {
  // const history = useHistory();

  // console.log("Home");

  return (
    <IonPage>
      <IonContent fullscreen>
        <Header showBack={true} />
        {/* <IonButton expand="block" onClick={() => history.push("/customize-quiz")}>
          Customize Quiz
        </IonButton> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
