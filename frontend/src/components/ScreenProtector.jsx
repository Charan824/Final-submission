import React from 'react';
import './styles.css'; // Assuming you have a styles.css file for common styles

const ScreenProtector = () => {
    return (
        <div className="product-details">
            <img src="./images/screenprotector.png" alt="Screen Protector" />
            <h2>Screen Protector</h2>
            <p>Keep your screen scratch-free.</p>
            <p className="price">Price: ₹300</p>
            <button>Buy Now</button>
            <button>Add to Cart</button>
        </div>
    );
};

export default ScreenProtector;