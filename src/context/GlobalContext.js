import React, { createContext, useState } from "react";
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {


    const [counter, setCounter] = useState(0);


return (
    <GlobalContext.Provider
      value={{
        counter,
        setCounter,

      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};