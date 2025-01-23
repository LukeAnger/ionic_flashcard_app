import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Home.css';
import { useHistory } from "react-router-dom";
import CluesLogo from '../static/cluesLogo';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense" className='row jc-c ai-c'>
          <CluesLogo />
        </IonHeader>
        <IonButton expand="block" onClick={() => history.push("/customize-quiz")}>
          Customize Quiz
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
