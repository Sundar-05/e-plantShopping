import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from './CreateSlice';

const CartItems = () => {
    const [showItems, setShowItems] = useState(false);
    const [numberOfPlants, setNumberOfPlants] = useState(1);

    const cartItems = useSelector((state) => state.cart.items) || [];
    const dispatch = useDispatch();

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

    const handleToggleItems = () => {
        setShowItems(!showItems);
    };

    return (
        <div>
            <h2>Cart Items</h2>
            {cartItems.map((item) => (
                <div key={item.name}>
                    <h3>{item.name}</h3>
                    <p>Cost: {item.cost}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Subtotal: {calculateSubtotal(item)}</p>
                    <button onClick={() => handleIncrement(item.name)}>Increase Quantity</button>
                    <button onClick={() => handleDecrement(item.name)}>Decrease Quantity</button>
                    <button onClick={() => handleRemove(item.name)}>Remove</button>
                </div>
            ))}
            <button onClick={handleToggleItems}>
                {showItems ? 'Hide Items' : 'Show Items'}
            </button>
            <h3>Total Quantity: {calculateTotalQuantity()}</h3>
            <h3>Total Cost: {calculateTotalCost()}</h3>
        </div>
    );
};

export default CartItems;
