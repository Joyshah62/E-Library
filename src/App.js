import React,{ useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch , Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Mybook from './Mybook';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import About from './About';
import Carousel from './Carousel';
import { countries } from './Data';
import FAQ from './FAQ';
import Accordion from './Accordion';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe
(
  "pk_test_51MeMGpSJQ6PAvITZSBJSJky24X5nCuJn79mx4qzj9Yg4u83jv56sIhu0BD9hntXKrwkhj4yvsz0rESU0D0uVNAJG00rxtSuvcP"
);
  function App() {

    const [{user}, dispatch] = useStateValue();
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if(authUser){
  
          dispatch({
            type: "SET_USER",
            user: authUser,
          });
        }else{
  
          dispatch({
            type:"SET_USER",
            user:null,
          });
  
        }
      })
  
      return () => {
        unsubscribe();
      }
  
    }, []);
  
    console.log(user);

  return (
    <Router>
          <div className="app">
            <Switch>
              <Route path="/orders">
                <Header/>
                <Orders/>
              </Route>
                <Route path="/login">
                  <Login/>
                  </Route>
                  <Route path="/mybooks">
                    <Header/> 
                    <Mybook/>
                  </Route>
                  <Route path="/about">
                    <Header/>
                    <Accordion/>
                    <About/>
                  </Route>
                  <Route path="/payment">
                    <Header/>
                    <Elements stripe={promise}>
                    <Payment/>
                    </Elements>
                  </Route>
                  <Route path="/">
                    <Header/>
                    <Carousel images={countries}/>
                    <Home/>
                  </Route>
            </Switch>
          </div>
    </Router>
    
  );
}

export default App;
