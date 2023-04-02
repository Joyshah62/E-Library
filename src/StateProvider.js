//setup data layer
//We need to track the basket

import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, googleSignIn, children }) => {

    return (
        <StateContext.Provider value={useReducer(reducer, initialState, googleSignIn)}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateValue = () => {
    return useContext(StateContext);
};