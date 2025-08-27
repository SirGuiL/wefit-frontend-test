import { useContext } from "react";

import {
  ProductsContext,
  ProductsContextProps,
} from "../contexts/ProductsContext";

export function UseProducts(): ProductsContextProps {
  const context = useContext(ProductsContext);

  return context;
}
