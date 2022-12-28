import {
  IonApp,
  IonContent
} from '@ionic/react';
import React from 'react';


const NotFoundPage: React.FC = () => {
  return (
    <IonApp>
     
      <IonContent className="ion-padding">

        Page not found.

      </IonContent>
    </IonApp>
  );
};

export default NotFoundPage;
