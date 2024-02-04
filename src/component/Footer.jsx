import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      {/* Your footer content */}
      <p>Copyright © 2024 Kingly Robot. All rights reserved.</p>
      
      {/* Links */}
      <div className='flex flex-col'>
        <span><Link to="/about">About Us</Link></span>
        <span><Link to="/contact">Contact Information</Link></span>
        <span><Link to="/faq">Frequently Asked Questions (FAQ)</Link></span>
      </div>
    </footer>
  );
};

export default Footer;
