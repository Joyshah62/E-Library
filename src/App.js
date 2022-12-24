import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch , Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
function App() {
  return (
    <Router>
          <div className="app">
            <Switch>
                <Route path="/login">
                  <h1>login</h1>
                  </Route>
                  <Route path="/mybooks">
                    <Header/>
                    <h1>MyBooks</h1>
                  </Route>
                  <Route path="/about">
                    <h1>About</h1>
                  </Route>
                  <Route path="/">
                    <Header/>
                    <Home/>
                  </Route>
            </Switch>
          </div>
    </Router>
    
  );
}

export default App;
