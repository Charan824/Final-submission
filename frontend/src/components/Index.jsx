import React from 'react';
import './styles.css'; // Assuming you have a styles.css file for common styles

const Index = () => {
    return (
        <div>
            <header>
                <h1>GADGETHUB</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="signin.html">Sign In</a></li>
                        <li><a href="signup.html">Sign Up</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="home">
                    <h2>Welcome to Our Electronics Store</h2>
                    <p>Find the best deals on the latest electronics.</p>
                </section>
                <section id="products">
                    <h2>Our Products</h2>
                    <div className="product-list">
                        <div className="product-item">
                            <a href="smartphone.html">
                                <img src="./images/image copy 2.png" alt="Smartphone" />
                                <h3>Smartphone</h3>
                                <p>Latest model with advanced features.</p>
                                <p>Price: ₹50,000</p>
                                <button>Buy Now</button>
                                <button>Add to Cart</button>
                                <button>Wishlist</button>
                            </a>
                        </div>
                        {/* More products here */}
                    </div>
                </section>
            </main>
            <footer>
                <div className="footer-content">
                    <p>&copy; 2024 GADGETHUB. All rights reserved.</p>
                    <div className="contact-details">
                        <p><strong>Email:</strong> charangujila@electronics.com</p>
                        <p><strong>Phone:</strong> +91 8247010445</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;