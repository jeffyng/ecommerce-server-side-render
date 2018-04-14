import React from 'react';

const NavBar = () => (
  <nav className="navbar">
    <ul className="navbar__container">
      <li className="navbar__item">
        <a className="navbar__link" href="/women">
          <span className="navbar__text">Women</span>
        </a>
      </li>
      <li className="navbar__item">
        <a className="navbar__link" href="/men">
          <span className="navbar__text">Men</span>
        </a>
      </li>
      <li className="navbar__item">
        <a className="navbar__link" href="/visit">
          <span className="navbar__text">Visit Us</span>
        </a>
      </li>
      <li className="navbar__item">
        <a className="navbar__link" href="#">
          <span className="navbar__text">Factories</span>
        </a>
      </li>
      <li className="navbar__item">
        <a className="navbar__link" href="#">
          <span className="navbar__text">About</span>
        </a>
      </li>
    </ul>
  </nav>
);

export default NavBar;