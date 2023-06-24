import React, {useState, useEffect} from "react";
import classes from "./Meals.module.css";
import FoodItem from "./FoodItem";

function Meals() {
  
  const [mealsData, setMealsData] = useState([]);
  
  useEffect(() => {
    const getMeals = async () => {
      const response = await fetch(
        "https://react-food-app-c8896-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await response.json();
      setMealsData(data);
    };   
    getMeals();
  }, [])
  
  return (
    <div className={classes.meals}>
     {
        mealsData.map((item) => (
        <FoodItem
          name={item.name}
          key={item.id}
          id={item.id}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default Meals;
