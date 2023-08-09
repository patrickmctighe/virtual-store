import React, { useState, useEffect } from "react";
import { increaseQt } from "../functions/increaseQt";
import { decreaseQt } from "../functions/decreaseQt";

export default function Cart() {
  const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cart, setCart] = useState(initialCartItems);

  const handleIncrease = (item) => {
    increaseQt(item);
    const updatedCart = [...cart];
    const updatedItem = updatedCart.find(
      (cartItem) => cartItem.name === item.name
    );
    setCart(updatedCart);
  };

  const handleDecrease = (item) => {
    decreaseQt(item);
    const updatedCart = [...cart];
    const updatedItem = updatedCart.find(
      (cartItem) => cartItem.name === item.name
    );
    setCart(updatedCart);
  };

  const handleRemove = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.name !== item.name);
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    localStorage.removeItem(`addedToCart_${item.name}`);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  console.log(cart);

  return (
    <div className="cartArea">
      <h1>Cart</h1>
      <div className="items">
        {cart.map((item) => (
          <div className="cartCard" key={item.name}>
            <div className="nameAndImg">
              <h4>{item.name}</h4>
              <img className="cartImg" src={item.imgUrl} alt={item.name} />
            </div>

            <div className="qtButtAndPrice">
              {" "}
              <h4 className="price">{item.priceScrap} $crap</h4>
              <div className="qtButt">
                <button
                  className="increase"
                  onClick={() => handleIncrease(item)}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  className="decrease"
                  onClick={() => handleDecrease(item)}
                >
                  -
                </button>
              </div>
              <button onClick={() => handleRemove(item)} className="remove">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        <p>
          Total:{" "}
          {cart.reduce((acc, item) => acc + item.priceScrap * item.quantity, 0)}{" "}
          $crap
        </p>
      </div>
      <button className="confirmPurchase">Confirm Purchase</button>
    </div>
  );
}
