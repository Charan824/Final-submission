import React from 'react';
import './styles.css'; // Assuming you have a styles.css file for common styles

const Smartwatch = () => {
    return (
        <div className="product-details">
            <img src="./images/image copy.png" alt="Smartwatch" />
            <h2>Smartwatch</h2>
            <p>Stay connected on the go.</p>
            <p className="price">Price: ₹15,000</p>
            <button>Buy Now</button>
            <button>Add to Cart</button>
        </div>
    );
};

export default Smartwatch;