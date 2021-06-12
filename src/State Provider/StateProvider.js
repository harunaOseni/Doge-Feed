//Importing what you need to make your react contect api functional
import React, { createContext, useContext, useReducer } from "react";

//Creating the context API or it can also be called a data layer
export const StateContext = createContext();

//Creating a state provider to provide the global state which will be available
//to every part of our application.
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Creating a useStateValue variable to be able to read and get our state in any part
//of our application.
export const useStateValue = () => useContext(StateContext);
