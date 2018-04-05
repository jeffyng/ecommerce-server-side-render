import React from 'react';

const UserNavBar = () => {
  return (
  <nav className="user-navbar">
    <ul className="user-navbar__container">
      <li className="user-navbar__item">
        <a href="#" className="user-navbar__link">
          <span className="user-navbar__text">Log In</span>
        </a>
      </li>
      <li className="user-navbar__item">
        <a href="#" className="user-navbar__link">
          <span className="user-navbar__text">Sign Up</span>
        </a>
      </li>
      <li className="user-navbar__item">
        <a href='/cart' className="user-navbar__link">
          <span className="user-navbar__text">Cart</span>
        </a>
      </li>
    </ul>
  </nav>
)
};



export default UserNavBar;
