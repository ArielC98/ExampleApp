import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';
import { Redirect } from 'react-router';
import { useAuth } from '../auth';

interface Props {
  onLogin: () => void
}

const LoginPage: React.FC<Props> = ({onLogin}) => {

  const {loggedIn} = useAuth();

  if(loggedIn){
    return <Redirect to = "/my/entries" />
  }

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        <IonButton expand='block' onClick={onLogin}>Login</IonButton>

      </IonContent>
    </IonApp>
  );
};

export default LoginPage;
