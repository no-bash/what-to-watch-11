import React, {useState} from 'react';
import MovieCard from '../components/MovieCard';
import MainCard from '../components/MainCard';
import {IMovieData} from '../index';

const mainCardData: IMovieData = {
  name: 'The Grand Budapest Hotel',
  img: 'the-grand-budapest-hotel-poster',
  genre: 'Drama',
  releaseDate: 2014,
  previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
};


const MainPage = ({ movieData }: { movieData: IMovieData[] }) => {


  const [activeCard, setActiveCard] = useState('');

  const onHover = (name: string) => {
    setActiveCard(name);
  };

  const renderCard = (movie: IMovieData[]) => movie.map((data) => <MovieCard key={data.name} {...data} onHover={onHover} />);
  // eslint-disable-next-line no-console
  console.log(activeCard);
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
            <li className='catalog__genres-item catalog__genres-item--active'>
              <a href='#' className='catalog__genres-link'>All genres</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Comedies</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Crime</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Documentary</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Dramas</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Horror</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Kids & Family</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Romance</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Sci-Fi</a>
            </li>
            <li className='catalog__genres-item'>
              <a href='#' className='catalog__genres-link'>Thrillers</a>
            </li>
          </ul>

          <div className='catalog__films-list'>
            { renderCard(movieData) }
          </div>

          <div className='catalog__more'>
            <button className='catalog__button' type='button'>Show more</button>
          </div>
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
