import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import './Movies.css';
import Checkbox from './Checkbox/Checkbox';

function Movies() {
    return (
        <div className="movies">
           <SearchForm />
           <Checkbox />
            <MoviesCardList />
            <button className="movies__button" type="button">Ещё</button>
            <span className="movies__saveddevider"></span>
        </div>
    )
}

export default Movies;
