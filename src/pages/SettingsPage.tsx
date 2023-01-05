import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';
import { auth } from '../firebase';


const SettingsPage: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        <IonButton color= 'medium' expand='block'
        onClick = {() => auth.signOut()}>Cerrar sesion</IonButton>

      </IonContent>
    </IonApp>
  );
};

export default SettingsPage;
