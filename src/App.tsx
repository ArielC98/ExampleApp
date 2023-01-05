import {
  IonApp

} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import { AuthContext } from './auth';
import { IonReactRouter } from '@ionic/react-router';
import LoginPage from './pages/LoginPage';
import AppTabs from './AppTabs';
import NotFoundPage from './pages/NotFoundPage';
import { auth } from './firebase';




const App: React.FC = () => {
  
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() =>{
    auth.onAuthStateChanged((user) =>{
      setLoggedIn(Boolean(user));
    });
    
  },[]);
  console.log(`rendering App with loggedIn= ${loggedIn}`);
  

  return (
    <IonApp>
      {/* Hacemos el contexto de autorizacion accesible para toda la app */}
      <AuthContext.Provider value = {{loggedIn}}>
        {/* Se pasa el atributo value con el valor de loggedIn para guardarlo en el proveedor de contexto */}
        <IonReactRouter>       
            <Switch>
              <Route exact path='/login'>
                  <LoginPage/>
              </Route>
              <Route path="/my">
                <AppTabs/>
              </Route>
              <Redirect exact path = "/" to="/my/entries" />
              <Route>
                <NotFoundPage />
              </Route>
            </Switch>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
