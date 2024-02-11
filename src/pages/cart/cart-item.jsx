import React, { useContext } from "react";
import "./cart.css";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemcount } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage}></img>
      <div className="description">
        <p>
          {""}
          <b>{productName}</b>
        </p>
        <p>
          <b>${price}</b>
          <div className="counthandler">
            <button onClick={() => removeFromCart(id)}> - </button>
            <input
              value={cartItems[id]}
              onChange={(e) => updateCartItemcount(Number(e.target.value), id)}
            />
            <button onClick={() => addToCart(id)}>+</button>
          </div>
        </p>
      </div>
    </div>
  );
};
