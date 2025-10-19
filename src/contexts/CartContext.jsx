import React, { createContext, useContext, useState, useEffect } from 'react';
import { getItem, setItem } from '../data/storage.js';

// Create a React context for sharing cart state across the application.
const CartContext = createContext();

// Custom hook to access cart context.  Using this hook centralises access
// patterns and simplifies unit testing.
export function useCart() {
  return useContext(CartContext);
}

// Provider component that stores the cart in state and persists it to
// localStorage whenever it changes.  All child components have access to the
// cart actions and items via the context.
export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    const stored = getItem('cart');
    return Array.isArray(stored) ? stored : [];
  });

  // Persist the cart to localStorage whenever it changes.
  useEffect(() => {
    setItem('cart', items);
  }, [items]);

  const addToCart = (product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setItems([]);

  const value = {
    items,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}