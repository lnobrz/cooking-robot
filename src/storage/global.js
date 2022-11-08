import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);

  return (
    <GlobalContext.Provider
      value={{ cart, setCart, amount, setAmount, finalPrice, setFinalPrice }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
