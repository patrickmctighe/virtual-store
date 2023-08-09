export function addToCart(item,  setAddedToCart) {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingCartItemIndex = storedCartItems.findIndex(
      (cartItem) => cartItem.name === item.name
    );
  
    if (existingCartItemIndex === -1) {
      // Item is not in the cart, add it
      const updatedCartItems = [...storedCartItems, item];
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      setAddedToCart(true);
      localStorage.setItem(`addedToCart_${item.name}`, "true");
    } else {
      // Item is already in the cart, update quantity or remove
      if (item.quantity === 0) {
        storedCartItems.splice(existingCartItemIndex, 1); // Remove the item
      } else {
        storedCartItems[existingCartItemIndex] = item; // Update quantity
      }
      localStorage.setItem("cartItems", JSON.stringify(storedCartItems));
    }
  }