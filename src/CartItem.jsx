import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CreateSlice";

const CartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrement = (itemName) => {
    dispatch(updateQuantity({ name: itemName, quantity: 1 }));
  };

  const handleDecrement = (itemName) => {
    dispatch(updateQuantity({ name: itemName, quantity: -1 }));
  };

  const handleRemove = (itemName) => {
    dispatch(removeItem({ name: itemName }));
  };

  const calculateSubtotal = (item) => {
    return item.cost * item.quantity;
  };

  const calculateTotalQuantity = () => {
    let totalQuantity = 0;
    cartItems.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };

  const calculateTotalCost = () => {
    let totalCost = 0;
    cartItems.forEach((item) => {
      totalCost += item.cost * item.quantity;
    });
    return totalCost;
  };

  return (
    <div className="cart-items">
      <h2>Shopping Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="item-details">
            <div className="item-name">{item.name}</div>
            <div className="item-cost">${item.cost}</div>
            <div className="quantity-controls">
              <button onClick={() => handleDecrement(item.name)}>-</button>
              <div className="quantity">{item.quantity}</div>
              <button onClick={() => handleIncrement(item.name)}>+</button>
            </div>
            <div className="subtotal">Subtotal: ${calculateSubtotal(item)}</div>
            <button onClick={() => handleRemove(item.name)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <div className="total-quantity">Total Items: {calculateTotalQuantity()}</div>
        <div className="total-cost">Total Cost: ${calculateTotalCost()}</div>
      </div>
    </div>
  );
};

export default CartItems;
