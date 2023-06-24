import React, { useContext, useState } from "react";

import classes from "./Cart.module.css";
import CartContext from "../store/CartContext";
import CartItem from "./CartItem";
import Modal from "./Modal";
import Checkout from "./Checkout";

function Cart(props) {
  const CartCtx = useContext(CartContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  function cartItemRemoveHandler(id) {
    CartCtx.removeItem(id);
  }

  function cartItemAddHandler(item) {
    CartCtx.addItem({ ...item, quantity: 1 });
  }

  const onOrderHandler = () => setIsSubmitting(true); 

const cartItemContent = (!isConfirmed?
  <div>
    <button
      className={`btn btn-secondary ${classes.closeBtn}`}
      onClick={props.onClose}>
      Close
    </button>
    <button
      className={`btn btn-warning ${classes.orderBtn}`}
      onClick={onOrderHandler}
      disabled={!props.visibility}>
      Order
    </button>
  </div>
:alert('Order placed successfully'));
  return (
    <Modal onClick={props.onClose}>
      <ol>
        {CartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ol>
      <span className={classes.totalAmtLabel}>Total Amount</span>
      <span className={classes.totalAmt}>${CartCtx.totalAmount}</span>
      {!isSubmitting ? cartItemContent : <Checkout setIsSubmitting={setIsSubmitting} setIsConfirmed={setIsConfirmed} />}
      
    </Modal>
  );
}

export default Cart;
