import React from 'react';
import './styles.css'; // Assuming you have a styles.css file for common styles

const Camera = () => {
    return (
        <div className="product-details">
            <img src="./images/3.png" alt="Camera" />
            <h2>Camera</h2>
            <p>Capture your moments.</p>
            <p className="price">Price: ₹40,000</p>
            <button>Buy Now</button>
            <button>Add to Cart</button>
        </div>
    );
};

export default Camera;