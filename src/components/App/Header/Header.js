import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header(params) {
  return (
    <header className='header'>
      <div className="header__container">
        <Link to="/"><img className="header__logo" src={logo} alt="Логотип" /></Link>
        <Navigation></Navigation>
      </div>
    </header>
    )
}

export default Header;
