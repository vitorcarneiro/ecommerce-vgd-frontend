import { useContext } from "react";
import CartContext from "../contexts/AuthContext";

export default function useCart() {
  return useContext(CartContext);
}