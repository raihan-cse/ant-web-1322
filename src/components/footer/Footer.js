// React Module Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Common Components Import
import Logo from '../../assets/logo/footer-logo.svg';

// Footer Components Import
import ContactInfo from './FooterComponents/ContactInfo';
import SocialIcons from './FooterComponents/SocialIcons';

// Own CSS Import
import './Footer.css';


export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_content">

          {/* logo */}
          <div className="footer_logo">
            <Link to='/'><img src={Logo} alt="logo" /></Link>
          </div>

          {/* contacts information */}
          <div className="contacts_wrapper">
            <ContactInfo />
          </div>

          {/* social links wrapper */}
          <div className="social_wrapper">
            <SocialIcons />
          </div>

        </div>
      </div>
    </div>
  );
}
