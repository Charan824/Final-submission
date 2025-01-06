import React from 'react';
import './styles.css'; // Assuming you have a styles.css file for common styles

const PhoneCase = () => {
    return (
        <div className="product-details">
            <img src="./images/phonecase.png" alt="Phone Case" />
            <h2>Phone Case</h2>
            <p>Protect your phone in style.</p>
            <p className="price">Price: ₹500</p>
            <button>Buy Now</button>
            <button>Add to Cart</button>
        </div>
    );
};

export default PhoneCase;