import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Admin from './Admin';
import Sidebar from './Sidebar';
import Home from './Home';
import Mybook from './Mybook';
import Login from './Login';
import About from './About';
import Carousel from './Carousel';
import Accordion from './Accordion';
import Payment from './Payment';
import Orders from './Orders';
import Searchbar from './Searchbar';
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
  const [searchBarVisibility, setSearchBarVisibility] = useState("false");

  const handleSearchBarVisibility = () => {
    setSearchBarVisibility(!searchBarVisibility);
  }

  const countries = [

    {
      image: "\\images\\1.png",

    },

    {
      image: "\\images\\2.png",

    },

    {
      image: "\\images\\3.png",

    },

    {
      image: "\\images\\4.png",

    },

  ];


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
          <Route path='/admin'>
            <Sidebar setResultWords={setResultWords} setSearchValue={setSearchValue} genre={genre} setGenre={setGenre} searchBarVisibility={searchBarVisibility} handleSearchBarVisibility={handleSearchBarVisibility}></Sidebar>
            <Admin />
          </Route>
          <Route path="/orders">
            <Sidebar setResultWords={setResultWords} setSearchValue={setSearchValue} genre={genre} setGenre={setGenre} searchBarVisibility={searchBarVisibility} handleSearchBarVisibility={handleSearchBarVisibility}></Sidebar>
            <Orders />
          </Route>

          <Route path="/login">
            <Sidebar setResultWords={setResultWords} setSearchValue={setSearchValue} genre={genre} setGenre={setGenre} searchBarVisibility={searchBarVisibility} handleSearchBarVisibility={handleSearchBarVisibility}></Sidebar>
            <Login />
          </Route>

          <Route path="/mybooks">
            <Sidebar setResultWords={setResultWords} setSearchValue={setSearchValue} genre={genre} setGenre={setGenre} searchBarVisibility={searchBarVisibility} handleSearchBarVisibility={handleSearchBarVisibility}></Sidebar>
            <Mybook />
          </Route>

          <Route path="/about">
            <Sidebar setResultWords={setResultWords} setSearchValue={setSearchValue} genre={genre} setGenre={setGenre} searchBarVisibility={searchBarVisibility} handleSearchBarVisibility={handleSearchBarVisibility}></Sidebar>
            <Accordion />
            <About />
          </Route>

          <Route path="/payment">
            <Sidebar setResultWords={setResultWords} setSearchValue={setSearchValue} genre={genre} setGenre={setGenre} searchBarVisibility={searchBarVisibility} handleSearchBarVisibility={handleSearchBarVisibility}></Sidebar>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Searchbar resultWords={resultWords} setResultWords={setResultWords} searchValue={searchValue} setSearchValue={setSearchValue} searchBarVisibility={searchBarVisibility} ></Searchbar>
            <Sidebar setResultWords={setResultWords} setSearchValue={setSearchValue} genre={genre} setGenre={setGenre} searchBarVisibility={searchBarVisibility} handleSearchBarVisibility={handleSearchBarVisibility}></Sidebar>
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
