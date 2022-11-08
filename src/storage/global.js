import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState("");

  return (
    <GlobalContext.Provider value={{ cart, setCart, amount, setAmount }}>
      {children}
    </GlobalContext.Provider>
  );
};
