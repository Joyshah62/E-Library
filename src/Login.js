import React, { useState } from 'react'
import { auth, provider1 } from './firebase';
import { Link, useHistory } from "react-router-dom";
import GoogleButton from 'react-google-button';
import { useStateValue } from './StateProvider'
import { StateContext } from './StateProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';

import "./Login.css";

function Login() {

    const [sliderOnLogin, setSliderOnLogin] = useState(false);

    const toggleSlider = () => {
        setSliderOnLogin(!sliderOnLogin);
    };

    const signin = () => {
        auth.signInWithPopup(provider1).catch(alert);
    }

    const user = useStateValue();
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");


    // Previous Logic to display error messages. Remove this after successful testing of new login.

    // const login = (event) => {
    //     event.preventDefault();

    //     auth.signInWithEmailAndPassword(email, password)
    //         .then((auth) => {

    //             history.push("/");

    //         })
    //         .catch((e) => {
    //             switch (e.code) {
    //                 case "auth/user-not-found":
    //                     document.getElementById("error").innerHTML = "Invalid Email or Password";
    //                     document.getElementById("error").style.backgroundColor = "#ff6339";
    //                     break;
    //                 case "auth/wrong-password":
    //                     document.getElementById("error").innerHTML = "Invalid Email or Password";
    //                     document.getElementById("error").style.backgroundColor = "#ff6339";
    //                     break;
    //                 case "auth/too-many-requests":
    //                     document.getElementById("error").innerHTML = "Too Many Attempts";
    //                     document.getElementById("error").style.backgroundColor = "#ff6339";
    //                     break;
    //                 default:
    //                     document.getElementById("error").innerHTML = e.message;
    //                     document.getElementById("error").style.backgroundColor = "#ff6339";
    //             }
    //         });
    // };


    // const register = (event) => {
    //     event.preventDefault();

    //     auth.createUserWithEmailAndPassword(email, password)
    //         .then(auth => {
    //             document.getElementById("error").innerHTML = "Account Created Successfully!";
    //             document.getElementById("error").style.backgroundColor = "green";
    //         })
    //         .catch((e) => {
    //             switch (e.code) {
    //                 case "auth/email-already-in-use":
    //                     document.getElementById("error").innerHTML = "Email already in use";
    //                     document.getElementById("error").style.backgroundColor = "#ff6339";
    //                     break;
    //                 case "auth/weak-password":
    //                     document.getElementById("error").innerHTML = "Provide A Stronger Password";
    //                     document.getElementById("error").style.backgroundColor = "#ff6339";
    //                     break;
    //                 case "auth/too-many-requests":
    //                     document.getElementById("error").innerHTML = "Too Many Attempts";
    //                     document.getElementById("error").style.backgroundColor = "#ff6339";
    //                     break;
    //                 default:
    //                     document.getElementById("error").innerHTML = e.message;
    //                     document.getElementById("error").style.backgroundColor = "#ff6339";
    //             }
    //         });
    // };


    const login = (event) => {
        event.preventDefault();

        if (email !== "") {
            if (password === "") {
                toast.error("Please Enter Your Password", { autoClose: 3000 });
                return;
            }
        }
        else {
            toast.error("Please Enter Your E-mail", { autoClose: 3000 });
            return;
        }

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            })
            .catch((e) => {
                switch (e.code) {
                    case "auth/user-not-found":
                    case "auth/wrong-password":
                    case "auth/too-many-requests":
                        toast.error("Invalid Email or Password", { autoClose: 3000 });
                        break;
                    default:
                        toast.error(e.message.toString().replace("Firebase:", ""), { autoClose: 3000 });
                }
            });
    };

    const register = (event) => {
        event.preventDefault();

        if (email !== "") {
            if (password !== "") {
                if (confPassword !== "") {
                    if (password !== confPassword) {
                        toast.error("Passwords do not match. Please try again.", { autoClose: 3000 });
                        return;
                    }
                }
                else {
                    toast.error("Please Confirm Your Password", { autoClose: 3000 });
                    return;
                }
            }
            else {
                toast.error("Please Enter Your Password", { autoClose: 3000 });
                return;
            }
        }
        else {
            toast.error("Please Enter Your E-mail", { autoClose: 3000 });
            return;
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                toast.success("Account Created Successfully!", { autoClose: 3000 });
            })
            .catch((e) => {
                switch (e.code) {
                    case "auth/email-already-in-use":
                    case "auth/weak-password":
                    case "auth/too-many-requests":
                        toast.error(e.message.toString().replace("Firebase:", ""), { autoClose: 3000 });
                        break;
                    default:
                        toast.error(e.message.toString().replace("Firebase:", ""), { autoClose: 3000 });
                }
            });
    };

    return (
        <>
            <div className="flex flex-col md:flex-row h-screen bg-white">
                <motion.div
                    initial={{ x: -50 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`w-full md:w-1/2 transition-transform duration-500 ${sliderOnLogin ? 'bg-white' : 'bg-gray-800'
                        } bg-no-repeat bg-cover relative flex flex-col justify-center items-center`}
                >
                    <div className="w-full md:w-1/2 flex items-center justify-center">

                        {sliderOnLogin && (
                            <>
                                <motion.div className="">
                                    <motion.img
                                        className="object-contain w-[200px] md:w-auto"
                                        initial={{ opacity: 0, x: 0 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 0 }}
                                        transition={{ duration: 0.2, delay: 0.5 }}
                                        src="/images/EduZone Logo.png"
                                        alt="" />
                                </motion.div>
                            </>
                        )}

                        <AnimatePresence>

                            {!sliderOnLogin && (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-10/11"
                                    >
                                        {/* Signup form */}
                                        <form className="bg-white shadow-md rounded m-4 px-8 py-6">
                                            {/* Form fields */}

                                            <motion.div
                                                className="flex flex-col mb-4"
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.2 }}
                                            >
                                                <label className="mb-2 font-bold text-gray-800" htmlFor="email">
                                                    E-mail
                                                </label>
                                                <input
                                                    onChange={event => setEmail(event.target.value)}
                                                    className="border py-2 px-3 text-gray-800"
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Enter your email address"
                                                    required
                                                />
                                            </motion.div>

                                            <motion.div
                                                className="flex flex-col mb-4"
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.6 }}
                                            >
                                                <label className="mb-2 font-bold text-gray-800" htmlFor="password">
                                                    Password
                                                </label>
                                                <input
                                                    onChange={event => setPassword(event.target.value)}
                                                    className="border py-2 px-3 text-gray-800"
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Enter your password"
                                                    required
                                                />
                                            </motion.div>

                                            <motion.div
                                                className="flex flex-col mb-4"
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.6 }}
                                            >
                                                <label className="mb-2 font-bold text-gray-800" htmlFor="password">
                                                    Confirm Password
                                                </label>
                                                <input
                                                    onChange={event => setConfPassword(event.target.value)}
                                                    className="border py-2 px-3 text-gray-800"
                                                    type="password"
                                                    name="password"
                                                    id="passwordconf"
                                                    placeholder="Confirm your password"
                                                    required
                                                />
                                            </motion.div>

                                            <motion.button
                                                onClick={register}
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4 mx-20"
                                                type="submit"
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.8 }}
                                            >
                                                Sign Up
                                            </motion.button>

                                            <Link to={user ? '\'/\'>' : '\'/login\'>'} className='header__link'>

                                                <motion.div
                                                    initial={{ opacity: 0, y: -20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, delay: 1 }}
                                                >
                                                    <GoogleButton className=''
                                                        theme="light"
                                                        onClick={signin}>Sign in with Google
                                                    </GoogleButton>
                                                </motion.div>

                                            </Link>
                                            <div className="flex whitespace-pre-wrap" id="error"></div>

                                        </form>

                                    </motion.div>

                                </>

                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`w-full md:w-1/2 transition-colors duration-500 ${sliderOnLogin ? 'bg-gray-800' : 'bg-white'
                        } bg-no-repeat bg-cover relative flex flex-col justify-center items-center`}
                >
                    <div className="w-full md:w-1/2 flex items-center justify-center">

                        {!sliderOnLogin && (
                            <>
                                <motion.div className="flex justify-center">
                                    <motion.img
                                        // className="invisible md:visible"
                                        className="object-contain w-[200px] h-max md:w-auto"
                                        initial={{ opacity: 0, x: 0 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 0 }}
                                        transition={{ duration: 0.2, delay: 0.5 }}
                                        src="/images/EduZone Logo.png"
                                        alt="" />
                                </motion.div>
                            </>
                        )}
                        <AnimatePresence>


                            {sliderOnLogin && (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 50 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-10/11"
                                    >
                                        {/* Login form */}
                                        <form className="bg-white shadow-md rounded m-4 px-8 py-6">
                                            {/* Form fields */}

                                            <motion.div
                                                className="flex flex-col mb-4"
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.2 }}
                                            >
                                                <label className="mb-2 font-bold text-gray-800" htmlFor="email">
                                                    E-mail
                                                </label>
                                                <input
                                                    onChange={event => setEmail(event.target.value)}
                                                    className="border py-2 px-3 text-gray-800"
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Enter your email address"
                                                    required
                                                />
                                            </motion.div>

                                            <motion.div
                                                className="flex flex-col mb-4"
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.6 }}
                                            >
                                                <label className="mb-2 font-bold text-gray-800" htmlFor="password">
                                                    Password
                                                </label>
                                                <input
                                                    onChange={event => setPassword(event.target.value)}
                                                    className="border py-2 px-3 text-gray-800"
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Enter your password"
                                                    required
                                                />
                                            </motion.div>

                                            <motion.button
                                                onClick={login}
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4 mx-20"
                                                type="submit"
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.8 }}
                                            >
                                                Sign In
                                            </motion.button>

                                            <Link to={user ? '\'/\'>' : '\'/login\'>'} className='header__link'>

                                                <motion.div
                                                    initial={{ opacity: 0, y: -20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.6, delay: 1 }}
                                                >
                                                    <GoogleButton className=''
                                                        theme="light"
                                                        onClick={signin}>Sign in with Google
                                                    </GoogleButton>
                                                </motion.div>

                                            </Link>

                                        </form>

                                    </motion.div>
                                    <div id="error"></div>

                                </>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
                <AnimatePresence>

                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                        className={`fixed bottom-10 right-10 ${sliderOnLogin ? "md:right-10" : "md:right-[950px]"}`}
                    >

                        <motion.button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={toggleSlider}
                        >
                            {sliderOnLogin ? 'New User?' : 'Already Have an Account?'}
                        </motion.button>

                    </motion.div>
                </AnimatePresence>


            </div>
        </>
    );

}

export default Login