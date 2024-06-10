import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, addItem, removeItem } from './createSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(updateQuantity({ name: item.name, quantity: 1 }));
    };

    const handleDecrement = () => {
        dispatch(updateQuantity({ name: item.name, quantity: -1 }));
    };

    const handleRemove = () => {
        dispatch(removeItem(item.name));
    };

    const calculateSubtotal = () => {
        return item.cost * item.quantity;
    };

    return (
        <div>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} />
            <p>Cost: {item.cost}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Subtotal: {calculateSubtotal()}</p>
            <button onClick={handleIncrement}>Increase Quantity</button>
            <button onClick={handleDecrement}>Decrease Quantity</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default CartItem;
