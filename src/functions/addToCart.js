import { useCartItemsCount } from "../context/context"; // Import the hook


export function addToCart(item,  setAddedToCart) {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    
    const existingCartItemIndex = storedCartItems.findIndex(
      (cartItem) => cartItem.name === item.name
    );

  
    if (existingCartItemIndex === -1) {
     
      const updatedCartItems = [...storedCartItems, item];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      setAddedToCart(true);
      localStorage.setItem(`addedToCart_${item.name}`, "true");
     
    } else {
     
      if (item.quantity === 0) {
        storedCartItems.splice(existingCartItemIndex, 1);
        
      } else {
        storedCartItems[existingCartItemIndex] = item; 
        
      }
      localStorage.setItem("cartItems", JSON.stringify(storedCartItems));
    }
    
  }