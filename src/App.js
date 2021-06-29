import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes";

import './App.css'


function App() {

  const [state, setstate] = useState('es')

  return (
    <div className="App">
      <button onClick={setstate('en')}>Cambiar idioma</button>
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
    </div>
  );
}

export default App;