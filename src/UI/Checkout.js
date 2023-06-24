import React, { useRef, useContext, useState } from "react";
import CartContext from "../store/CartContext";

const Checkout = (props) => {
  const CartCtx = useContext(CartContext);
  const [enteredNameIsValid, setenteredNameIsValid] = useState(false);
  const [enteredStreetIsValid, setenteredStreetIsValid] = useState(false);
  const [enteredPostalCodeIsValid, setenteredPostalCodeIsValid] =
    useState(false);
  const [enteredCityIsValid, setenteredCityIsValid] = useState(false);

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const onConfirmHandler = async (event) => {
    event.preventDefault();
    setenteredNameIsValid(nameInputRef.current.value.trim() !== "");
    setenteredStreetIsValid(streetInputRef.current.value.trim() !== "");
    setenteredPostalCodeIsValid(postalCodeInputRef.current.value.trim().length === 5);
    setenteredCityIsValid(cityInputRef.current.value.trim() !== "");

    const FormisValid =
      enteredCityIsValid &&
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid;

    if (!FormisValid) {
      return;
      }
      
      const userData={name: nameInputRef.current.value, street: streetInputRef.current.value, postalCode: postalCodeInputRef.current.value, city: cityInputRef.current.value}
    const response = await fetch(
      "https://react-food-app-c8896-default-rtdb.firebaseio.com/cart.json ",
      {
        method: "POST",
        body: JSON.stringify({
          userData: userData,
          cart: CartCtx.items,
        }),
      }
    );
    console.log(response);
    props.setIsSubmitting(false);
      props.setIsConfirmed(true);
      CartCtx.clearItem();
  };

  return (
    <form onSubmit={onConfirmHandler}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" ref={nameInputRef} />

      <label htmlFor="street">street</label>
      <input type="text" name="street" id="street" ref={streetInputRef} />

      <label htmlFor="postalCode">postalCode</label>
      <input
        type="text"
        name="postalCode"
        id="postalCode"
        ref={postalCodeInputRef}
      />

      <label htmlFor="city">city</label>
      <input type="text" name="city" id="city" ref={cityInputRef} />

      <button typeof="submit" onClick={onConfirmHandler}>
        Confirm
      </button>
    </form>
  );
};

export default Checkout;
