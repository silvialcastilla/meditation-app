import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LanguageContext } from "./context/LanguageContext";
import routes from "./config/routes";

import './styles/styles.scss';


const App = ( )=> {

  const [language, setLanguage] = useState('es')

  return (
    <div className="App">
      <button onClick={()=> (language === 'es' ? setLanguage('en') : setLanguage('es'))}>Cambiar idioma</button>
      <LanguageContext.Provider value={{
        language: language,
        setLanguage: setLanguage
      }}>
      <Router>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Router>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;