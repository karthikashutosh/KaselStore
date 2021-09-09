import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 500,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //addto cart
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  //toggle amount
  const toggleAmount = (id, value) => {};
  //remove cart
  const removeCart = (id) => {};

  //clear cart

  const clearCart = () => {};
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, toggleAmount, removeCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
