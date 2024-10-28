import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./i18n/i18next";
import { ModeProvider } from "./Context/ModeContext";
import { store } from "./components/redux/store";
import { Provider } from "react-redux";
import { CartProvider } from "react-use-cart";
import { WishlistProvider } from "react-use-wishlist";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ModeProvider>
    <WishlistProvider>
                  <CartProvider>
                        <App />
                  </CartProvider>
            </WishlistProvider>
    </ModeProvider>
  </Provider>
);
