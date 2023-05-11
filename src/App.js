import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Mybook from './Mybook';
import Login from './Login';
import About from './About';
import Carousel from './Carousel';
import { countries } from './Data';
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

  const [{ user }, dispatch] = useStateValue();
  const [searchValue, setSearchValue] = useState("");
  const [resultWords, setResultWords] = useState([""]);
  const [genre, setGenre] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {

        dispatch({
          type: "SET_USER",
          user: null,
        });

      }
    })

    return () => {
      unsubscribe();
    }

  }, []);

  // console.log(user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header resultWords={resultWords} setResultWords={setResultWords} searchValue={searchValue} setSearchValue={setSearchValue} />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/mybooks">
            <Header resultWords={resultWords} setResultWords={setResultWords} searchValue={searchValue} setSearchValue={setSearchValue} />
            <Mybook />
          </Route>

          <Route path="/about">
            <Header resultWords={resultWords} setResultWords={setResultWords} searchValue={searchValue} setSearchValue={setSearchValue} />
            <Accordion />
            <About />
          </Route>

          <Route path="/payment">
            <Header resultWords={resultWords} setResultWords={setResultWords} searchValue={searchValue} setSearchValue={setSearchValue} />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/fiction">
            <Header resultWords={resultWords} setResultWords={setResultWords} searchValue={searchValue} setSearchValue={setSearchValue} />
            <Carousel images={countries} />
            <Fiction searchValue={searchValue} resultWords={resultWords} />
          </Route>

          <Route path="/novel">
            <Header resultWords={resultWords} setResultWords={setResultWords} searchValue={searchValue} setSearchValue={setSearchValue} />
            <Carousel images={countries} />
            <Novel searchValue={searchValue} resultWords={resultWords} />
          </Route>

          <Route path="/selfhelp">
            <Header resultWords={resultWords} setResultWords={setResultWords} searchValue={searchValue} setSearchValue={setSearchValue} />
            <Carousel images={countries} />
            <Selfhelp searchValue={searchValue} resultWords={resultWords} />
          </Route>

          <Route path="/thriller">
            <Header resultWords={resultWords} setResultWords={setResultWords} searchValue={searchValue} setSearchValue={setSearchValue} />
            <Carousel images={countries} />
            <Thriller searchValue={searchValue} resultWords={resultWords} />
          </Route>

          <Route path="/">
            <Sidebar resultWords={resultWords} setResultWords={setResultWords} searchValue={searchValue} setSearchValue={setSearchValue} genre={genre} setGenre={setGenre}></Sidebar>
            {/* <Header resultWords={resultWords} setResultWords={setResultWords} searchValue={searchValue} setSearchValue={setSearchValue} /> */}
            <Carousel images={countries} />
            <Home searchValue={searchValue} resultWords={resultWords} genre={genre} />
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
