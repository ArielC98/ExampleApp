import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton
} from '@ionic/react';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';

interface RouteParams{
  id: string;
}


const EntryPage: React.FC = () => {

  const {id} = useParams<RouteParams>();
  
  const [entry, setEntry] = useState<any>();

  useEffect(() => {
    const entriesRef = collection(firestore , 'entries');
    const docRef = doc(entriesRef,id);
    getDoc(docRef).then((doc) => {
      const entry = {id: doc.id, ...doc.data()};
      console.log(entry);
      
      setEntry(entry);
    });
  }, [id])
  
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonBackButton defaultHref='/'/>
          </IonButtons>
          <IonTitle>{entry?.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {entry?.description}
      </IonContent>
    </IonApp>
  );
};

export default EntryPage;
