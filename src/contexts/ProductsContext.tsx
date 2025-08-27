import { ReactNode, createContext, useCallback, useState } from "react";

import { movieResponse, productCartDTO, productDTO } from "../dtos/productDTO";
import { apiRequest } from "../utils/api";

export type ProductsContextProps = {
  products: productDTO[];
  cart: productCartDTO[];
  isLoading: boolean;
  handleAddProductInCart: (id: number) => void;
  handleRemoveProductInCart: (id: number) => void;
  handleDeleteProductInCart: (id: number) => void;
  handleClearCart: () => void;
  getProducts: () => void;
};

type ProductsContextProviderProps = {
  children: ReactNode;
};

export const ProductsContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps
);

export function HistoryContextProvider({
  children,
}: ProductsContextProviderProps) {
  const [products, setProducts] = useState<productDTO[]>([]);
  const [cart, setCart] = useState<productCartDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = useCallback(async () => {
    try {
      const response = await apiRequest<movieResponse>("/movies");

      const forceError = import.meta.env.VITE_FORCE_ERROR || false;

      if (forceError) {
        throw new Error("Error on request");
      }

      setProducts(response.products);
    } catch (e) {
      console.error(e);
    } finally {
      const delay = parseInt(import.meta.env.VITE_REQUEST_DELAY) || 0;

      await new Promise((resolve) => setTimeout(resolve, delay));

      setIsLoading(false);
    }
  }, []);

  const handleAddProductInCart = (id: number) => {
    const product = products.find((product) => product.id === id);

    if (!product) {
      return;
    }

    const productAlreadyInCart = cart.find((item) => item.id == id);

    if (!productAlreadyInCart) {
      setCart([
        ...cart,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ]);
      return;
    }

    setCart(() =>
      cart.map((item) =>
        item.id == id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleRemoveProductInCart = (id: number) => {
    setCart(() =>
      cart
        .map((item) =>
          item.id == id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleDeleteProductInCart = (id: number) => {
    setCart(() => cart.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        cart,
        handleAddProductInCart,
        isLoading,
        handleRemoveProductInCart,
        handleDeleteProductInCart,
        handleClearCart,
        getProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
