import React from 'react';
import './Contact.css';

const Contact = () => {
  
  return (
    <div className="contact-page-container">
      <h2>Contact Us</h2>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> support@inventoryapp.com</p>
        <p><strong>Address:</strong> 123 Inventory St, Suite 100, Inventory City, IN 12345</p>
      </div>

      

      <div className="social-media">
        <h3>Follow Us</h3>
        <p>
          <a href="https://facebook.com">Facebook</a> |
          <a href="https://twitter.com">Twitter</a> | 
          <a href="https://linkedin.com">LinkedIn</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
