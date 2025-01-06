import React from 'react';
import './styles.css'; // Assuming you have a styles.css file for common styles

const Tablet = () => {
    return (
        <div className="product-details">
            <img src="./images/2.png" alt="Tablet" />
            <h2>Tablet</h2>
            <p>Portable and powerful.</p>
            <p className="price">Price: ₹30,000</p>
            <button>Buy Now</button>
            <button>Add to Cart</button>
        </div>
    );
};

export default Tablet;