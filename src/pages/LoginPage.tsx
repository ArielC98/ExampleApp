import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';
import { Redirect } from 'react-router';
import { useAuth } from '../auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth} from "../firebase";

interface Props {
  onLogin: () => void
}

const LoginPage: React.FC<Props> = ({onLogin}) => {

  const {loggedIn} = useAuth();


  const handleLogin = async () => {
    const credential = await signInWithEmailAndPassword(auth, "test1@example.org", "123456");
    console.log("credential", credential);
    onLogin();
  }

  if(loggedIn){
    return <Redirect to = "/my/entries" />
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput type = "email"/>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput type = "password"/>
          </IonItem>
        </IonList>
        <IonButton expand='block' onClick={handleLogin}>Login</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
