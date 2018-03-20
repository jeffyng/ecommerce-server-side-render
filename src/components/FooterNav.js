import React from 'react';

const FooterNav = () => (
  <nav className="footer-nav">
    <ul className="footer-nav__container">
      
      <li className="footer-nav__section">
        <h6 className="footer-nav__header">Account</h6>
        <ul className="footer-nav__links">
          <li className="footer-nav__link-container">
            <a className="footer-nav__link" href="#">Manage Account</a>
          </li>
          <li className="footer-nav__link-container">
            <a className="footer-nav__link" href="#">Saved Items</a>
          </li>
          <li className="footer-nav__link-container">
            <a className="footer-nav__link" href="#">Orders &amp; Returns</a>
          </li>
          <li className="footer-nav__link-container">
            <a className="footer-nav__link" href="#">Redeem a Gift</a>
          </li>
        </ul>
      </li>
      
      <li className="footer-nav__section">
        <h6 className="footer-nav__header">Company</h6>
        <ul className="footer-nav__links">
          <li className="footer-nav__link-container">
            <a className="footer-nav__link" href="#">About</a>
          </li>
          <li className="footer-nav__link-container">
            <a className="footer-nav__link" href="#">Factories</a>
          </li>
          <li className="footer-nav__link-container">
            <a className="footer-nav__link" href="#">Careers</a>
          </li>
          <li className="footer-nav__link-container">
            <a className="footer-nav__link" href="#">Contact &amp; FAQ</a>
          </li>
        </ul>
      </li>
      <li className="footer-nav__section">
        <h6 className="footer-nav__header">Connect</h6>
        <ul className="footer-nav__links">
          <li className="footer-nav__link-container">
            <a className="footer-nav__link" href="#">Instagram</a>
          </li>
          <li className="footer-nav__link-container">
            <a className="footer-nav__link" href="#">Twitter</a>
          </li>
          <li className="footer-nav__link-container">
            <a className="footer-nav__link" href="#">Affiliates</a>
          </li>
        </ul>
      </li>

    </ul>
  </nav>

);

export default FooterNav;