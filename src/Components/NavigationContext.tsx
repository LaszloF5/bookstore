import React, { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const NavigationContext = createContext({ goToHome: () => {} });

export const NavigationProvider = ({ children }) => {
  const navigate = useNavigate();

  // Függvény a főoldalra navigáláshoz
  const goToHome = () => navigate("/");

  return (
    <NavigationContext.Provider value={{ goToHome }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
