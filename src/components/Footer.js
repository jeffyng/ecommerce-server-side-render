import React from 'react';
import EmailForm from './EmailForm';
import FooterNav from './FooterNav';

const Footer = () => (
  <footer className="footer">
    <div className="footer__email">
      <EmailForm />
    </div>
    <div className="footer__nav">
      <FooterNav />
    </div>
  </ footer>
);

export default Footer;
