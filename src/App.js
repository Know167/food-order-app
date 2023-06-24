import { useState } from "react";
import Header from "./Layout/Header";
import Meals from './Meals/Meals';
import CartProvider from "./store/CartProvider";
import Cart from "./UI/Cart";

function App() {

  const [CartVisibility, setCartVisibility] = useState(false);

  function showCart() {
    setCartVisibility(true);
  }
  function hideCart() {
    setCartVisibility(false);
  }


  return (
    <CartProvider>
      {CartVisibility && <Cart visibility={ CartVisibility} onClose={hideCart} />}
      <Header onShowCart={showCart} />
      <Meals />
    </CartProvider>
  );
}

export default App;
