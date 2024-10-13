// styles/ThemeContext.js
import React, { createContext, useContext } from "react";
import theme from "./theme";

const ThemeContext = createContext(theme.dark);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={theme.dark}>{children}</ThemeContext.Provider>
  );
};
