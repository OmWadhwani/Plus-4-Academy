import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("plus4_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("plus4_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (course) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === course.id);
      if (exists) {
        return prevCart;
      }
      return [...prevCart, course];
    });
  };

  const removeFromCart = (courseId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== courseId));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("plus4_cart");
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const isInCart = (courseId) => {
    return cart.some((item) => item.id === courseId);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalPrice,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
