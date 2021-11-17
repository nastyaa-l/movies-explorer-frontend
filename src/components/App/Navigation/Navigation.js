import React from 'react';
import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import AccountButton from '../AccountButton/AccountButton';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <div className="nav-links">
                <Link to="/movies" className='nav-links__link nav-links__link_active'>Фильмы</Link>
                <Link to="/saved-movies" className='nav-links__link'>Сохраненные фильмы</Link>
            </div>
            <BurgerMenu></BurgerMenu>
            <AccountButton></AccountButton>
        </nav >
    )
}

export default Navigation;
