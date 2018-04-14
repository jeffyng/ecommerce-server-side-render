import React from 'react';
import NavBar from './NavBar';
import UserNavBar from './UserNavBar';

const Header = () => (
  <header className="header">
    <NavBar />
   <div className="header__container">
    <div className="header__title"><a className="header__link" href="/">EVERJANE</a></div>
   </div>
   <UserNavBar />
  </header>
)


export default Header;