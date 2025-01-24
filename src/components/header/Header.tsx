import React from "react";
import { useHistory } from 'react-router-dom';
import { IonButton, IonHeader, IonIcon } from "@ionic/react";
import { returnUpBack } from 'ionicons/icons';
import './Header.css';
import CluesLogo from '../static/cluesLogo';

interface HeaderProps {
    showBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({showBack}) => {
    // console.log("Header: ", showBack);
    
    return (
        <IonHeader className="row jc-sb ai-c" id="app-header">
            {showBack ? (
                <IonButton expand="block" fill="clear" routerLink="/home">
                    <IonIcon icon={returnUpBack} />
                </IonButton>
            ) : (
                <div style={{color: "black"}}>PH</div>
            )}
            <CluesLogo />
            <div>
                PH
            </div>
        </IonHeader>
    );
};

export default Header;