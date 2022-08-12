import React from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../features/custoremSlice";
import { removeReseravtion } from "../features/reservationSlice";

interface ReservationCardTypes {
  name: string;
  index: number;
}

export default function ReservationCard({ name, index }: ReservationCardTypes) {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(addCustomer(name));
    dispatch(removeReseravtion(index));
  };

  return (
    <div onClick={handleOnClick} className="reservation-card-container">
      {name}
    </div>
  );
}
