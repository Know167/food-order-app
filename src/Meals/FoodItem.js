import { useState, useContext } from "react";
import CartContext from "../store/CartContext";
import classes from "./FoodItem.module.css";

function FoodItem(props) {
  const [quantity, setQuantity] = useState(1);
  const CartCtx = useContext(CartContext);

  function onChangeQuantity(event) {
    setQuantity(+event.target.value);
  }
  const addItemHandler = () => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: quantity,
    };
    CartCtx.addItem(item);
  };
  return (
    <div className={classes.details}>
      <div className={classes.foodItem}>
        <div className="title">{props.name}</div>
        <div className="price">$ {props.price}</div>
      </div>
      <div className={classes.inputVal}>
        <input
          type="number"
          onChange={onChangeQuantity}
          value={quantity}
          min={1}
          max={5}
        />
        <button className={`btn ${classes.addBtn}`} onClick={addItemHandler}>
          Add
        </button>
      </div>
    </div>
  );
}

export default FoodItem;
