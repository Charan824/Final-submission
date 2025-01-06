import React from 'react';

const Smartphone = () => {
    return (
        <div className="product-details">
            <img src="./images/image copy 2.png" alt="Smartphone" />
            <h2>Smartphone</h2>
            <p>Latest model with advanced features.</p>
            <p className="price">Price: ₹50,000</p>
            <button>Buy Now</button>
            <button>Add to Cart</button>
        </div>
    );
};

export default Smartphone;