import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("userCart"))
      ? JSON.parse(localStorage.getItem("userCart"))
      : []
  );
  const [amount, setAmount] = useState("");
  const localStorageCart = JSON.parse(localStorage.getItem("userCart"));

  return (
    <GlobalContext.Provider
      value={{ cart, setCart, amount, setAmount, localStorageCart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
