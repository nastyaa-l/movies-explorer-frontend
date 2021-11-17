import React from 'react';
import findImage from '../../../../images/find.svg';
import './SearchForm.css';

function SearchForm(params) {
    return (
        <section className="search-form">
          <div className="search-form__container">
            <input className="search-form__input" placeholder="Фильм" type="text" required />
            <img className="search-form__find-image" src={findImage} alt="Иконка стрелка" />
          </div>
        </section>
    )
}

export default SearchForm;
