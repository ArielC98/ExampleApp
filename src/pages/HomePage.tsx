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

const HomePage: React.FC = () => {

  //Empty array means our list will be empty until we get the data from firestore
  const [entries, setEntries] = useState([]);
  useEffect(() =>{
    const entriesRef = collection(firestore , 'entries');
    getDocs(entriesRef).then((snapshot) => {
      const entries = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEntries(entries);
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
