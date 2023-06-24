import React from "react";


function CartButton(props) {

  return (
    <>
      <button className="btn btn-primary" onClick={props.showCart}>
        Cart
        <span> ({props.amount })</span>
      </button>
      
    </>
  );
}

export default CartButton;
