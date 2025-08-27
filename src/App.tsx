import { RouterProvider } from "react-router-dom";

import { router } from "./routes/router";

import "./global.css";
import { HistoryContextProvider } from "./contexts/ProductsContext";

function App() {
  return (
    <HistoryContextProvider>
      <RouterProvider router={router} />
    </HistoryContextProvider>
  );
}

export default App;
