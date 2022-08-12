import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { addFood } from "../features/custoremSlice";

interface CustomerCardTypes {
  name: string;
}

function CustomerCard({ name }: CustomerCardTypes) {
  const [foodNameInput, setfoodNameInput] = useState("");
  const food = useSelector((state: RootState) => state.customers.food);
  const dispatch = useDispatch();

  const addFoodToCustomer = () => {
    if (!setfoodNameInput) return;
    dispatch(addFood(foodNameInput));
    setfoodNameInput("")
  };

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((name) => {
            return <p>{name}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={foodNameInput}
            onChange={(e) => setfoodNameInput(e.target.value)}
          />
          <button onClick={addFoodToCustomer}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
