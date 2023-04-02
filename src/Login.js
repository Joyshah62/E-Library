import React, { useState } from 'react'
import { auth, provider1 } from './firebase';
import { Link, useHistory } from "react-router-dom";
import GoogleButton from 'react-google-button';
import { useStateValue } from './StateProvider'
import { useAuthState } from 'react-firebase-hooks/auth';
import "./Login.css";

function Login() {
    const signin = () => {
        auth.signInWithPopup(provider1).catch(alert);
    }
    const user = useStateValue();
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {

                history.push("/");

            })
            .catch((e) => {
                switch (e.code) {
                    case "auth/user-not-found":
                        document.getElementById("error").innerHTML = "User not found";
                        document.getElementById("error").style.backgroundColor = "#ff6339";
                        break;
                    case "auth/wrong-password":
                        document.getElementById("error").innerHTML = "Wrong password";
                        document.getElementById("error").style.backgroundColor = "#ff6339";
                        break;
                    default:
                        document.getElementById("error").innerHTML = e.message;
                        document.getElementById("error").style.backgroundColor = "#ff6339";
                }
            });
    };


const register = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                document.getElementById("error").innerHTML = "Account Created Successfully!";
                document.getElementById("error").style.backgroundColor = "green";
            })
            .catch((e) => {
                switch(e.code){
                    case "auth/email-already-in-use":
                        document.getElementById("error").innerHTML = "Email already in use";
                        document.getElementById("error").style.backgroundColor = "#ff6339";
                        break;
                    case "auth/weak-password":
                        document.getElementById("error").innerHTML = "Password should be at least 6 characters";
                        document.getElementById("error").style.backgroundColor = "#ff6339";
                        break;
                    default:
                        document.getElementById("error").innerHTML = e.message;
                        document.getElementById("error").style.backgroundColor = "#ff6339";
                }
            });
    };

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="/images/EduZone Logo.png"
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <div id='EmailBox'>
                        <input value={email} onChange={event => setEmail(event.target.value)} type="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required="required" />
                        <span>E-mail</span>
                        <img src='/images/tickmark.png' id='EmailTick' alt=''></img>

                    </div>

                    <div id='PassBox'>
                        <input className='PassBox' value={password} onChange={event => setPassword(event.target.value)} type="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$" required="required" />
                        <span>Password</span>
                        <img src='/images/tickmark.png' id='PassTick' alt=''></img>

                    </div>

                    <button className='login__signInButton' onClick={login} type="submit">Sign in</button>
                </form>
                <div id="error"></div>

                <p>
                    By signing-in you agree to E-Library's Conditions of Use. Please
                    see our Privacy Notice, our Cookies Notice and our interest-Based Ads
                    Notice.
                </p>
                <button onClick={register} className="login__RegisterButton">Create your Account</button>

                {/* <div>
                <button onClick={handleGoogleSignIn}></button> 

                <GoogleButton
                    className="g-btn"
                    type="light"
                    onClick={handleGoogleSignIn}>

                </GoogleButton>
            </div> */}
                <center>
                    <Link to={user ? '\'/\'>' : '\'/login\'>'} className='header__link'>
                        <div>
                            <GoogleButton className=''
                                theme="light"
                                onClick={signin}>Sign in with Google
                            </GoogleButton>
                        </div>
                    </Link>
                </center>
            </div>

        </div>
    )
}

export default Login