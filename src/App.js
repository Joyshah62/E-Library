import React,{ useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch , Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Header from './Header';
import Home from './Home';
import Mybook from './Mybook';
import Login from './Login';
import About from './About';
import Carousel from './Carousel';
import { countries } from './Data';
import FAQ from './FAQ';
import Accordion from './Accordion';
import Payment from './Payment';
import Orders from './Orders';
import Fiction from './Fiction';
import Thriller from './Thriller';
import Novel from './Novel';
import Selfhelp from './Selfhelp';
import './App.css';


const promise = loadStripe
(
  "pk_test_51MeMGpSJQ6PAvITZSBJSJky24X5nCuJn79mx4qzj9Yg4u83jv56sIhu0BD9hntXKrwkhj4yvsz0rESU0D0uVNAJG00rxtSuvcP"
);
  function App() {

    const [{user}, dispatch] = useStateValue();
    const [searchValue, setSearchValue] = useState("");
  
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
                <Header searchValue={searchValue} setSearchValue={setSearchValue} />
                <Orders/>
              </Route>

              <Route path="/login">
                <Login/>
              </Route>
                  
              <Route path="/mybooks">
                <Header searchValue={searchValue} setSearchValue={setSearchValue}/> 
                <Mybook/>
              </Route>
                  
              <Route path="/about">
                <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
                <Accordion/>
                <About/>
              </Route>
                  
              <Route path="/payment">
                <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
                <Elements stripe={promise}>
                  <Payment/>
                </Elements>
              </Route>

              <Route path="/fiction">
                <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
                <Carousel images={countries}/>
                <Fiction searchValue={searchValue}/>
              </Route>
                  
              <Route path="/novel">
                <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
                <Carousel images={countries}/>
                <Novel searchValue={searchValue}/>
              </Route>

              <Route path="/selfhelp">
                <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
                <Carousel images={countries}/>
                <Selfhelp searchValue={searchValue}/>
              </Route>
                  
              <Route path="/thriller">
                <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
                <Carousel images={countries}/>
                <Thriller searchValue={searchValue}/>
              </Route>

              <Route path="/">
                <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
                <Carousel images={countries}/>
                <Home searchValue={searchValue} />
              </Route>

            </Switch>
          </div>
          
          <ToastContainer style={{ marginTop: "45px" }} 
              autoClose={1000}
              theme="light"
          />
    </Router>
    
  );
}

export default App;
