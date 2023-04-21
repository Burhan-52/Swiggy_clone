import React from "react";
import { useDispatch } from "react-redux";
import { additem, removeitem } from "../utils/store/cartSlice";
// import { additem } from "../utils/store/cartSlice";

const ItemQuantity = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="quantity-container">

      <div className="quantity-btn"
        onClick={() => {
          dispatch(removeitem(item.id));
        }}
      >-</div>

      <div className="show-quantity">{item?.quantity}</div>

      <div
        className="quantity-btn"
        onClick={() => {
          dispatch(additem(item));
        }}>+
      </div>
    </div>
  );
};

export default ItemQuantity;