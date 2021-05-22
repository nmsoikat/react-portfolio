import React from 'react';
import './Footer.css'
import SocialIcons from './../SocialIcons/SocialIcons';

const Footer = () => {
  return (
    <footer className="footer-area mt-2">
      <p className="message">Please feel free to send me your valuable message,</p>
      <p className="email">nurcse5@gmail.com</p>
      <SocialIcons/>
    </footer>
  );
};

export default Footer;