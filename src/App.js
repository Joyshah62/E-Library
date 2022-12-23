import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch , Route} from "react-router-dom";
import Header from './Header';
function App() {
  return (
    <Router>
          <div className="app">
            <Switch>
                <Route path="/login">
                  <h1>login</h1>
                  </Route>
                  <Route path="/mybooks">
                    <h1>MyBooks</h1>
                  </Route>
                  <Route path="/about">
                    <h1>About</h1>
                  </Route>
                  <Route path="/">
                    <Header/>
                  </Route>
            </Switch>
          </div>
    </Router>
    
  );
}

export default App;
