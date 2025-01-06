import React from 'react';
import './styles.css'; // Assuming you have a styles.css file for common styles

const Charger = () => {
    return (
        <div className="product-details">
            <img src="./images/charger.png" alt="Charger" />
            <h2>Charger</h2>
            <p>Fast charging for your devices.</p>
            <p className="price">Price: ₹1,500</p>
            <button>Buy Now</button>
            <button>Add to Cart</button>
        </div>
    );
};

export default Charger;