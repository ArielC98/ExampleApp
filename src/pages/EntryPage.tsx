import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton
} from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { entries } from '../data';

interface RouteParams{
  id: string;
}


const EntryPage: React.FC = () => {

  const {id} = useParams<RouteParams>();
  const entry = entries.find((entry) => entry.id ===id);
  if(!entry){
    throw new Error (`No such entry: ${id}`)
  }
  
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonBackButton defaultHref='/'/>
          </IonButtons>
          <IonTitle>{entry.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        This is the entry page.
      </IonContent>
    </IonApp>
  );
};

export default EntryPage;
