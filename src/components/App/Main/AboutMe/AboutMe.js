import React from 'react';
import './AboutMe.css';
import photo from '../../../../images/photo.jpg';

function AboutMe() {
    return (
        <div id="student" className="aboutMe">
            <h2 className="aboutMe__title">Студент</h2>
            <p className="aboutMe__name">Анастасия</p>
            <p className="aboutMe__info">Фронтенд-разработчик, 21 год</p>
            <p className="aboutMe__text">Я живу в Москве. Очень люблю учиться и узнавать новое, с большим интересом прохожу дополнительные курсы по программированию. За последний год моя домашняя библиотека стала состоять из книг по JS, в наушниках теперь подкасты из IT (очень нравится «Мы обречены» и kamyshev.talk), а любимые видео – записи конференций и митапы. Люблю решать сложные задачи, в школьные годы выиграла множество олимпиад по математике, а сейчас преподаю ее школьникам и готовлю к ЕГЭ. Ответственная, коммуникабельная и целеустремленная, являюсь Мастером Спорта по художественной гимнастике и на протяжении 10 лет была капитаном команды. По выходным играю в волейбол и мечтаю научиться играть в большой теннис.</p>
            <a className="aboutMe__link" href="https://www.facebook.com/">Facebook</a>
            <a className="aboutMe__link" href="https://github.com/nastyaa-l">Github</a>
            <img className="aboutMe__avatar" src={photo} alt='Аватарка' />
        </div>
    )
}

export default AboutMe;
