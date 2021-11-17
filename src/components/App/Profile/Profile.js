import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {

    return (
        <form className="profile">
            <h2 className="profile__title">Привет, Виталий!</h2>
            <p className="profile__text">Имя</p>
            <p className="profile__text">Виталий</p>
            <input className="profile__text" id="name-input" name="user" type="text"  placeholder="Имя" required minLength="2" maxLength="40" />
            <hr className="profile__line"></hr>
            <p className="profile__text">E-mail</p>
            <p className="profile__text" >Radshura@yandex.ru</p>
            <input className="profile__text" id="email-input"  name="email" type="E-mail"  placeholder="E-mail" required minLength="2" maxLength="50" />
            <button type="button" className="profile__redact" >Редактировать</button>
            <Link className="profile__exit"  to='signin'>Выйти из аккаунта</Link>
        </form>
    )
}

export default Profile;
