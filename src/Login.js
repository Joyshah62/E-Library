import React, { useState } from 'react'
import "./Login.css";
import { auth } from './firebase';
import { Link, useHistory } from "react-router-dom";
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {

            history.push("/");

        })
        .catch((e) => alert(e.message));
    };

    const register = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {

        })
        .catch((e) => alert(e.message));
    };

  return (
    <div className="login">
        <Link to="/">
            <img
                className="login__logo"
                src="https://www.concreteisbetter.com/wp-content/uploads/2019/10/elibrary2.png"
                alt=""
            />
        </Link>

        <div className="login__container">
            <h1>Sign in</h1>
            <form>
                <div className='EmailBox'>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="text" required="required"/>
                    <span>E-mail</span> 
                </div>

                <div className='PassBox'>
                    <input className='PassBox' value={password} onChange={event => setPassword(event.target.value)} type="password" required="required"/>
                    <span>Password</span> 
                </div>

                <button className='login__signInButton' onClick={login} type="submit">Sign in</button>
            </form>

            <p>
                By signing-in you agree to E-Library's Conditions of Use. Please 
                see our Privacy Notice, our Cookies Notice and our interest-Based Ads 
                Notice.
            </p>
            <button onClick={register} className="login__RegisterButton">Create your Account</button>

        </div>

    </div>
  )
}

export default Login