import React, { useState} from 'react';
import MovieCard from '../components/movie-card';
import Loader from '../components/Loader';
import MainCard from '../components/main-card';
import {IMovieData} from '../types/types';
import {useDispatch, useSelector} from 'react-redux';
import {InitialState} from '../store/reducer';
import {store} from '../store';
import { setGenreAction} from '../store/actions';
import Header from '../components/header';
import Footer from '../components/footer';


const MainPage = () => {


  const [, setActiveCard] = useState('');
  const dispatch = useDispatch<typeof store.dispatch>();


  const [movieIndex, setMovieIndex] = useState(1);

  const onHover = (name: string) => {
    setActiveCard(name);
  };

  const renderCard = (movie: IMovieData[]) => movie.slice(0, 8 * movieIndex).map((data) => <MovieCard key={data.name} {...data} onHover={onHover} />);

  const {genres, movies: movieData, isLoad, promo} = useSelector((state: InitialState) => state);
  if(isLoad) {
    return <Loader />;
  }

  return (
    <>
      <section className='film-card'>
        <div className='film-card__bg'>
          <img src={promo?.backgroundImage} alt='The Grand Budapest Hotel' />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <Header />

        {promo && <MainCard key={promo?.id} {...promo}/>}
      </section>

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <ul className='catalog__genres-list'>
            <li onClick={() => dispatch(setGenreAction('All genre'))} className='catalog__genres-item catalog__genres-item--active'>
              <span className='catalog__genres-link'>All genre</span>
            </li>
            {genres.map((genre) => (
              <li onClick={() => dispatch(setGenreAction(genre))} key={genre} className='catalog__genres-item catalog__genres-item--active'>
                <span className='catalog__genres-link'>{genre}</span>
              </li>
            ))}

          </ul>

          <div className='catalog__films-list'>
            { renderCard(movieData) }
          </div>

          {movieIndex * 8 <= movieData.length &&
            <div className='catalog__more'>
              <button onClick={() => setMovieIndex(movieIndex + 1)} className='catalog__button' type='button'>Show more</button>
            </div>}
        </section>

        < Footer />
      </div>
    </>
  );
};

export default MainPage;
