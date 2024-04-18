import React from "react";
import { Link } from "react-router-dom";
import photo from "./images/photo.png";
const Cart = () => {
  return (
    <div className="cart">
      <Link to={"upload"}>
        <div className="cartItem">
          <img className="image" src={photo} alt="photo"></img>
          <p className="p">Lego</p>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
