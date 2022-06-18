import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartOpened, setCartOpened] = useState(false);

  const showCartHandler = () => {
    setCartOpened(true);
  };

  const hideCartHandler = () => {
    setCartOpened(false);
  };

  return (
    <CartProvider>
      {cartOpened && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
