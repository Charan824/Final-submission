import React from 'react';
import './styles.css'; // Assuming you have a styles.css file for common styles

const Cart = () => {
    return (
        <div className="cart-container">
            <h2>My Cart</h2>
            <div className="cart-items">
                <p>No items in the cart.</p>
            </div>
        </div>
    );
};

export default Cart;