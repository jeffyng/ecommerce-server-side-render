import React from 'react';
import NavBar from './NavBar';
import UserNavBar from './UserNavBar';

const Header = () => (
  <header className="header">
    <NavBar />
   <div className="header__container">
    <div className="header__title">EVERJANE</div>
   </div>
   <UserNavBar />
  </header>
)


export default Header;