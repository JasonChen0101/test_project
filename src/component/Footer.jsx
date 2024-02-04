import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      {/* Your footer content */}
      <p>Copyright © 2024 Kingly Robot. All rights reserved.</p>
      
      {/* Links */}
      <div className='flex flex-col'>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Information</Link>
        <Link to="/faq">Frequently Asked Questions (FAQ)</Link>
      </div>
    </footer>
  );
};

export default Footer;
