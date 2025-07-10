/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme])
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return(
    <ThemeContext.Provider value={{
      theme,
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export {ThemeProvider,useTheme}
