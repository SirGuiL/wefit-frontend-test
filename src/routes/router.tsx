import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "",
    element: <Home />,
  },
]);
