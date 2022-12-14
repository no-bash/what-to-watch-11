import React, { useState} from 'react';
import MovieCard from '../components/MovieCard';
import Loader from '../components/Loader';
import MainCard from '../components/MainCard';
import {IMovieData} from '../types/types';
import {useDispatch, useSelector} from 'react-redux';
import {InitialState} from '../store/reducer';
import {store} from '../store';
import { setGenreAction} from '../store/actions';


const mainCardData: IMovieData = {
  id: 1,
  previewImage: '',
  backgroundImage: '',
  backgroundColor: '',
  videoLink: '',
  description: '',
  rating: 10,
  scoresCount: 1,
  director: '',
  starring: [''],
  runTime: 10,
  isFavorite: true,
  name: 'The Grand Budapest Hotel',
  posterImage: 'https://11.react.pages.academy/static/film/poster/A_Star_Is_Born.jpg',
  genre: 'Drama',
  released: 2014,
  previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
};


const MainPage = () => {


  const [, setActiveCard] = useState('');
  const dispatch = useDispatch<typeof store.dispatch>();


  const [movieIndex, setMovieIndex] = useState(1);

  const onHover = (name: string) => {
    setActiveCard(name);
  };

  const renderCard = (movie: IMovieData[]) => movie.slice(0, 8 * movieIndex).map((data) => <MovieCard key={data.name} {...data} onHover={onHover} />);

  const {genres, movies: movieData, isLoad} = useSelector((state: InitialState) => state);
  if(isLoad) {
    return <Loader />;
  }

  return (
    <>
      <section className='film-card'>
        <div className='film-card__bg'>
          <img src={'img/bg-the-grand-budapest-hotel.jpg'} alt='The Grand Budapest Hotel' />
        </div>

        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header film-card__head'>
          <div className='logo'>
            <a className='logo__link'>
              <span className='logo__letter logo__letter--1'>W</span>
              <span className='logo__letter logo__letter--2'>T</span>
              <span className='logo__letter logo__letter--3'>W</span>
            </a>
          </div>

          <ul className='user-block'>
            <li className='user-block__item'>
              <div className='user-block__avatar'>
                <img src={'img/avatar.jpg'} alt='User avatar' width='63' height='63' />
              </div>
            </li>
            <li className='user-block__item'>
              <a className='user-block__link'>Sign out</a>
            </li>
          </ul>
        </header>


        <MainCard key={mainCardData.name} {...mainCardData}/>

      </section>

      <div className='page-content'>
        <section className='catalog'>
          <h2 className='catalog__title visually-hidden'>Catalog</h2>

          <ul className='catalog__genres-list'>
            {genres.map((genre) => (
              <li onClick={() => dispatch(setGenreAction(genre))} key={genre} className='catalog__genres-item catalog__genres-item--active'>
                <a href='#' className='catalog__genres-link'>{genre}</a>
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

        <footer className='page-footer'>
          <div className='logo'>
            <a className='logo__link logo__link--light'>
              <span className='logo__letter logo__letter--1'>W</span>
              <span className='logo__letter logo__letter--2'>T</span>
              <span className='logo__letter logo__letter--3'>W</span>
            </a>
          </div>

          <div className='copyright'>
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MainPage;
