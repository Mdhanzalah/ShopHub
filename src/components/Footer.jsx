import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
return (
<footer className="footer">
<div className="footer-container">

            <div className="footer-about">
                <h2>Shop<span>Hub</span></h2>
                <p>Your one-stop shop for everything.</p>
                <p>Discover quality products at the best prices.</p>
            </div>

            <div className="footer-links">
                <h3>Quick Links</h3>
                <Link to="/">Home</Link>
                <Link to="/cart">My Cart</Link>
                <Link to="/checkout">Checkout</Link>
            </div>

            <div className="footer-contact">
                <h3>Contact Us</h3>
                <p>Email: support@shophub.com</p>
                <p>Online Shopping Made Easy</p>
            </div>

        </div>

        <div className="footer-bottom">
            <p>© 2026 ShopHub. All rights reserved.</p>
        </div>
    </footer>
);

}

export default Footer;