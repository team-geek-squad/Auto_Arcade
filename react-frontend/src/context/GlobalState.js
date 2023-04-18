import React, { createContext, useReducer } from "react";

// initail state
const initialState = { };

// create context

export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
