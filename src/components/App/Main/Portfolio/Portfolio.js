import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <p className="portfolio__text">Статичный сайт</p>
            <a className="portfolio__link" href="https://github.com/nastyaa-l/how-to-learn">&#8599;</a>
            <p className="portfolio__text">Адаптивный сайт</p>
            <a className="portfolio__link" href="https://github.com/nastyaa-l/russian-travel">&#8599;</a>
            <p className="portfolio__text">Одностраничное приложение</p>
            <a className="portfolio__link" href="https://github.com/nastyaa-l/react-mesto-api-full">&#8599;</a>
        </div>
    )
}

export default Portfolio;
