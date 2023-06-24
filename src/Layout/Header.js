import React, { useState, useContext, useEffect } from "react";
import CartContext from "../store/CartContext";
import CartButton from "../UI/CartButton";
import classes from "./Header.module.css";

function Header(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const CartCtx = useContext(CartContext);
  const { items } = CartCtx;

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  useEffect(() => {
    if (items.length === 0) { return; }
    setBtnIsHighlighted(true);
    const timer = setTimeout(()=>setBtnIsHighlighted(false), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const totalQuantity = CartCtx.items.reduce((currNum, item) => {
    return currNum + item.quantity;
  }, 0);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid border border-4 rounded-3">
          <h2>Meal Application</h2>
          <div className={btnClasses}>
            <CartButton amount={totalQuantity} showCart={props.onShowCart}>
              Cart
            </CartButton>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
