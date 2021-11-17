import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main/Main';
import Movies from './Movies/Movies';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import SavedMovies from './SavedMovies/SavedMovies';
import Register from './Register/Register';
import Login from './Login/Login';
import PageNotFound from './PageNotFound/PageNotFound';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
        <Main />
        <Footer />
      </Route>
      <Route path="/movies">
        <Header />
        <Movies />
        <Footer />
      </Route>
      <Route path="/saved-movies">
        <Header />
        <SavedMovies />
        <Footer />
      </Route>
      <Route path="/profile">
        <Header />
        <Profile />
        </Route>
      <Route path="/signup">
        <Register />
      </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
