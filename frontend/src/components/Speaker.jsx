import React from 'react';
import './styles.css'; // Assuming you have a styles.css file for common styles

const Speaker = () => {
    return (
        <div className="product-details">
            <img src="./images/4.png" alt="Speaker" />
            <h2>Speaker</h2>
            <p>High-quality sound.</p>
            <p className="price">Price: ₹10,000</p>
            <button>Buy Now</button>
            <button>Add to Cart</button>
        </div>
    );
};

export default Speaker;