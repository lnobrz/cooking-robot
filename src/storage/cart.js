import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartStorage = ({ children }) => {
  const [cart, setCard] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCard }}>
      {children}
    </CartContext.Provider>
  );
};
