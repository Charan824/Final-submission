import React from 'react';
import './styles.css'; // Assuming you have a styles.css file for common styles

const Laptop = () => {
    return (
        <div className="product-details">
            <img src="./images/1.png" alt="Laptop" />
            <h2>Laptop</h2>
            <p>High performance for work and play.</p>
            <p className="price">Price: ₹70,000</p>
            <button>Buy Now</button>
            <button>Add to Cart</button>
        </div>
    );
};

export default Laptop;