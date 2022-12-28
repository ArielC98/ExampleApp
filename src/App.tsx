import {
  IonApp

} from '@ionic/react';
import React, { useState } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import { AuthContext } from './auth';
import { IonReactRouter } from '@ionic/react-router';
import LoginPage from './pages/LoginPage';
import AppTabs from './AppTabs';
import NotFoundPage from './pages/NotFoundPage';


const App: React.FC = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  console.log(`rendering App with loggedIn= ${loggedIn}`);
  

  return (
    <IonApp>
      {/* Hacemos el contexto de autorizacion accesible para toda la app */}
      <AuthContext.Provider value = {{loggedIn}}>
        {/* Se pasa el atributo value con el valor de loggedIn para guardarlo en el proveedor de contexto */}
        <IonReactRouter>       
            <Switch>
              <Route exact path='/login'>
                  <LoginPage onLogin={() => setLoggedIn(true)}/>
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
