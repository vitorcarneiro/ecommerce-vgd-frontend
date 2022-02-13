import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const persistedCart = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = useState(persistedCart);

  function storeCart(cartData) {
    setCart(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData));
  }

  return (
    <CartContext.Provider value={{ cart, storeCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;