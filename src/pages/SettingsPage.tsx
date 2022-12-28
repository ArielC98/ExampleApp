import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';


const SettingsPage: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        This is the Settings Page

      </IonContent>
    </IonApp>
  );
};

export default SettingsPage;
