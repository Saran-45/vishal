import React from 'react';
import './Footer.css';

const Footer = () => {
return (
    <>
    <footer className="footer">
    <div className="footer-section about">
        <h2>About Invenzen</h2>
        <p>
        At <strong>Invenzen</strong>, we provide comprehensive inventory management solutions designed to streamline your business operations and boost productivity. Our platform offers real-time inventory tracking, automated replenishment strategies, and seamless integration across systems, channels, and marketplaces. Tailored to meet the unique needs of businesses of all sizes, Invenzen ensures accurate stock levels, minimizes communication risks with vendors, and optimizes storage and quality control processes. Whether you're a small business owner or managing a large-scale operation, Invenzen empowers you to manage less and sell more efficiently.
        </p>
    </div>
    <div className="footer-section links">
        <h2>Quick Links</h2>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/Gallery">Gallery</a></li>
            <li><a href="/Press">Press & Media</a></li>
            <li><a href="/FAQ">FAQ</a></li>
            <li><a href="/Sitemap">Sitemap</a></li>
        </ul>
    </div>
    <div className="footer-section information">
        <h2>Information</h2>
            <ul>
                <li><a href="/login">Login & Register</a></li>
                <li><a href="/About">Why Choose Us</a></li>
                <li><a href="/Terms">Terms & Conditions</a></li>
                <li><a href="/Privacy">Privacy Policy</a></li>
                <li><a href="/Refund">Refund & Cancellation Policy</a></li>
                <li><a href="/Contact">Contact Us</a></li>
            </ul>
    </div>
        <div className="footer-section contact">
            <h2>Stay Connected</h2>
            <address>
            Invenzen Pvt Ltd 153,<br />
            Lane no-5, Padmawati Colony A<br />
            Kings Road, Jaipur-302019, Rajasthan<br />
            <a href="tel:+919786540135">+91-9786540135</a><br />
            <a href="mailto:yogaAcademy.com">Invenzen.com</a>
            </address>
            <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
    </div>
</footer>
    </>
)
}

export default Footer