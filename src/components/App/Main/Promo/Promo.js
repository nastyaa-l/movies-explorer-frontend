import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo.svg';
import './Promo.css';

function Promo () {
  return (
    <div className="promo">
      <div className="promo__header">
        <img className="promo__logo" src={logo} alt="Логотип сайта" />
        <Link className="promo__link-signup" to="/signup">Регистрация</Link>
        <Link className="promo__link-signin" to="/signin">Войти</Link>
      </div>
      <div className="promo__section">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <div className="promo__landing-logo"></div>
      </div>
    </div>
  )
}

export default Promo;
