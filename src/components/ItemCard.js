import React from "react";
import "../styles/ItemCard.css";

const ItemCard = (props) => {
  return (
    <div className="item-card-container">
      <div className="item-card-image">
        <img src={props.image} alt="" />
      </div>
      <div className="item-card-content">
        <p>{props.name}</p>
        <p>$ {props.price}</p>
      </div>
      {/* <div className="hovering-time">
        <p>{props.name}</p>
        <p>$ {props.price}</p>
        <button>Add to cart</button>
      </div> */}
    </div>
  );
};

export default ItemCard;