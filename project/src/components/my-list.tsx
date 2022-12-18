import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {InitialState} from '../store/reducer';
import Footer from './footer';

const MyList = () => {
  const {movies: movieData} = useSelector((state: InitialState) => state);
  const {id} = useParams<{id: string}>();
  return(
    <div className='user-page'>
      <header className='page-header user-page__head'>
        <div className='logo'>
          <a href='main.html' className='logo__link'>
            <span className='logo__letter logo__letter--1'>W</span>
            <span className='logo__letter logo__letter--2'>T</span>
            <span className='logo__letter logo__letter--3'>W</span>
          </a>
        </div>

        <h1 className='page-title user-page__title'>My list <span className='user-page__film-count'>9</span></h1>
        <ul className='user-block'>
          <li className='user-block__item'>
            <div className='user-block__avatar'>
              <img src='img/avatar.jpg' alt='User avatar' width='63' height='63'/>
            </div>
          </li>
          <li className='user-block__item'>
            <a className='user-block__link'>Sign out</a>
          </li>
        </ul>
      </header>

      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>

        <div className='catalog__films-list'>
          {
            movieData.map((data) => (
              <article key={data.name} className='small-film-card catalog__films-card'>
                <div className='small-film-card__image'>
                  <img src={data.previewImage}
                    alt={data.name} width='280' height='175'
                  />
                </div>
                <h3 className='small-film-card__title'>
                  <Link to={`/films/${id || ''}`} className='small-film-card__link'>{data.name}</Link>
                </h3>
              </article>))
          }

        </div>
      </section>

      < Footer />
    </div>
  );
};
export default MyList;
