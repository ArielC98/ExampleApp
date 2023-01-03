import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList, 
  IonItem
} from '@ionic/react';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase';
import { Entry, toEntry } from './models';

const HomePage: React.FC = () => {

  //Empty array means our list will be empty until we get the data from firestore
  const [entries, setEntries] = useState<Entry[]>([]);
  useEffect(() =>{
    const entriesRef = collection(firestore , 'entries');
    getDocs(entriesRef).then(({docs}) => {

      setEntries(docs.map(toEntry));
    });
  }, []);

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {entries.map((entry) => 
            <IonItem button  key={entry.id} routerLink={`/my/entries/${entry.id}`}>{entry.title}</IonItem>
          )}
        </IonList>
      </IonContent>
    </IonApp>
  );
};

export default HomePage;
