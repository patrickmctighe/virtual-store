
import React, { createContext, useContext, useState } from "react";

const CartItemsCountContext = createContext();

export function CartItemsCountProvider({ children }) {
  const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItemsCount, setCartItemsCount] = useState(initialCartItems.length);

  const updateCartItemsCount = (newCartItemsCount) => {
    setCartItemsCount(newCartItemsCount);
  };


  return (
    <CartItemsCountContext.Provider value={{ cartItemsCount, updateCartItemsCount }}>
      {children}
    </CartItemsCountContext.Provider>
  );
}

export function useCartItemsCount() {
  return useContext(CartItemsCountContext);
}