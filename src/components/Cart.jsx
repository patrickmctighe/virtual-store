import React, { useState, useEffect } from "react";
import { increaseQt } from "../functions/increaseQt";
import { decreaseQt } from "../functions/decreaseQt";
import { useCartItemsCount } from "../context/context";// Import the custom hook
import { addToCart } from "../functions/addToCart";

export default function Cart() {
  const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cart, setCart] = useState(initialCartItems);
  const [showPopup, setShowPopup] = useState(false); 
  const { cartItemsCount, updateCartItemsCount } = useCartItemsCount();// Use the custom hook

 
 
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
    updateCartItemsCount(cart.length); // Update cart items count
  }, [cart, cartItemsCount]);



  const handleConfirmPurchase = () => {
    setShowPopup(true); 
  };
  return (
    <div className="cartArea">
      <h1 className="cartTitle">Cart</h1>{cart.length === 0 && <p>No items in cart.</p>}
      {showPopup && (
        <div className="popup-container">
         <p>Your total is: &#9763;{cart.reduce((acc, item) => acc + item.priceScrap * item.quantity, 0)}</p>
         
          <p>Your designated drones will arrive shortly.</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
      <div className="itemsArea"> <div className="items">
        
        {cart.map((item) => (
          <div className="cartCard" key={item.name}>
            <div className="nameAndImg">
              <h4 className="itemName">{item.name}</h4>
              <img className="cartImg" src={item.imgUrl} alt={item.name} />
            </div>

            <div className="qtButtAndPrice">
              
              <p className="price">&#9763;{item.priceScrap}</p>
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
      </div></div>
     
      <div className="total">
        <p>
          Total:{" "}&#9763;
          {cart.reduce((acc, item) => acc + item.priceScrap * item.quantity, 0)}{" "}
        
        </p>
      </div>
      <button className="confirmPurchase" onClick={handleConfirmPurchase}>Confirm Purchase</button>
    
   </div>
  );
}
