import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

//domain ID -- dev-as13lucr.us.auth0.com

//cient ID --  u07eHx565n5HzE9Oaqle2CJxHq5I0jcx

ReactDOM.render(
  <Auth0Provider
    domain="dev-as13lucr.us.auth0.com"
    clientId="u07eHx565n5HzE9Oaqle2CJxHq5I0jcx"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,

  document.getElementById("root")
);
