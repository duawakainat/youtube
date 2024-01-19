"use client";
import React, { createContext, useContext, useState } from "react";
const AppContext = createContext();
const AppPrivider = ({ children }) => {
  const [toogleCallapse, settoogleCallapse] = useState(false);
  const wrapperClesses =  {
    ["w-60"]: !toogleCallapse,
    ["w-20"]: toogleCallapse,
  }
  return (
    <AppContext.Provider value={{ toogleCallapse, settoogleCallapse }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppPrivider };
