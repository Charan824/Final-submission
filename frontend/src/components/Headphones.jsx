import React from 'react';
import './styles.css'; // Assuming you have a styles.css file for common styles

const Headphones = () => {
    return (
        <div className="product-details">
            <img src="./images/image copy 3.png" alt="Headphones" />
            <h2>Headphones</h2>
            <p>Experience immersive sound quality.</p>
            <p className="price">Price: ₹5,000</p>
            <button>Buy Now</button>
            <button>Add to Cart</button>
        </div>
    );
};

export default Headphones;