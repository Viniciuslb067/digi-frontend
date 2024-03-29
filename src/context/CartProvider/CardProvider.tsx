import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Product } from "@/entities/Product";

type CartContextProps = {
  cart: Product[];
  cartDrawerOpen: boolean;
  removeItem: (slug?: string) => void;
  addToCart: (product: Product) => void;
  setCartDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type CartProviderProps = {
  children: React.ReactNode;
};

const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  removeItem: () => {},
  cartDrawerOpen: false,
  setCartDrawerOpen: () => {},
});

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.slug === product.slug);

      if (itemInCart) {
        return prevCart.map((item) => {
          const quantity = (item.quantity || 0) + (product.quantity ?? 1);
          return item.slug === product.slug ? { ...item, quantity } : item;
        });
      }

      return [...prevCart, { ...product }];
    });

    setCartDrawerOpen(true);
  };

  const removeItem = (slug?: string) => {
    if (!slug) return;

    setCart((prevCart) => prevCart?.filter((item) => item.slug !== slug));

    toast.success("Produto removido do carrinho.");
  };

  const value = {
    cart,
    addToCart,
    removeItem,
    cartDrawerOpen,
    setCartDrawerOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
