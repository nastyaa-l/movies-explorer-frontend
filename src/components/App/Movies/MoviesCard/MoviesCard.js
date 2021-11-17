import React from 'react';
import film from '../../../../images/film.png';
import './MoviesCard.css';

function MoviesCard() {
  return (
    <section className='movie-card'>
      <a className='movie-card__link' href={film} target='_blank' rel='noreferrer'>
        <img src={film} alt='33 слова о дизайне' className='movie-card__image'/>
      </a>
      <figcaption className='movie-card__caption'>
        <div className='movie-card__text-block'>
          <p className='movie-card__title'> 33 слова о дизайне
          </p>
          <p className='movie-card__length'>1ч 42мин</p>
        </div>
        <button className='movie-card__btn movie-card__btn_type_full-heart'/>
      </figcaption>
    </section>
  );
}

export default MoviesCard;
