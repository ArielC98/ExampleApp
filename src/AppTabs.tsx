import {
  IonRouterOutlet,
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {home as homeIcon, settings as settingsIcon} from 'ionicons/icons';
import EntryPage from './pages/EntryPage';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import { useAuth } from './auth';


const AppTabs: React.FC = () => {
  const {loggedIn} = useAuth();
  if(!loggedIn){
    return <Redirect to = "/login" />
  }

 
  return (
 

    <IonTabs>
      <IonRouterOutlet>
        <Route exact path='/my/entries'>
          <HomePage />
        </Route>
        <Route exact path='/my/entries/:id'>
          <EntryPage />
        </Route>
        <Route exact path='/my/settings'>
          <SettingsPage />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/my/entries">
          <IonIcon icon = {homeIcon}/>
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/my/settings">
          <IonIcon icon = {settingsIcon}/>
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>


  );
};

export default AppTabs;
