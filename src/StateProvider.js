//setup data layer
//We need to track the basket

import React, { createContext, useContext, useReducer } from "react";
import { 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged 
} from "firebase/auth";
import { auth } from './firebase';

//this is the data layer
export const StateContext = createContext();

// export const AuthContext = createContext();

// export const AuthContextProvider = ({children}) => {

//     const googleSignIn = () => {
//         const provider = new GoogleAuthProvider();
//         signInWithPopup(auth, provider);
//     };

//     return (
//         <StateContext.Provider value={{googleSignIn}}>
//             {children}
//         </StateContext.Provider>
//     );

// };



// Build a provider
export const StateProvider=({ reducer, initialState, googleSignIn, children}) => {

    return (
    <StateContext.Provider value={useReducer(reducer, initialState, googleSignIn)}>
        {children}
    </StateContext.Provider>
    );
};

export const useStateValue = () => {
    return useContext(StateContext);
};