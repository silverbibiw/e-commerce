import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./contexts/ProductContext.jsx";
import { BrowserRouter } from "react-router-dom";
import OrderProvider from "./contexts/OrderContext.jsx";
import CardProvider from "./contexts/CardContex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CardProvider>
    <ProductProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </ProductProvider>
  </CardProvider>
);
