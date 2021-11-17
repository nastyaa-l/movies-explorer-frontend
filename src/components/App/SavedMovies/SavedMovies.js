import React from 'react';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Checkbox from '../Movies/Checkbox/Checkbox'
import './SavedMovies.css';

function SavedMovies() {

    return (
        <div className="savedMovies">
            <SearchForm />
            <Checkbox />
            <MoviesCardList />
            <button className="savedMovies__button savedMovies__button_hidden" type="button" >Ещё</button>
            <span className="savedMovies__saveddevider"></span>
        </div>
    )
}

export default SavedMovies;
