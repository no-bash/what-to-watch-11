import React, {useEffect} from 'react';
import {getMovieAction, getSimilarAction} from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {store} from '../store';
import {InitialState} from '../store/reducer';
import {Link} from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

const MoviePage = () => {
  const dispatch = useDispatch<typeof store.dispatch>();
  useEffect(() => {
    dispatch(getMovieAction);
    // dispatch(getSimilarAction);
  }, []);
  const {activeMovie} = useSelector((state: InitialState) => state);
  return (
    <>
      <section className='film-card film-card--full'>
        <div className='film-card__hero'>
          <div className='film-card__bg'>
            <img src='img/bg-the-grand-budapest-hotel.jpg' alt='The Grand Budapest Hotel'/>
          </div>

          <h1 className='visually-hidden'>WTW</h1>

          <Header />

          <div className='film-card__wrap'>
            <div className='film-card__desc'>
              <h2 className='film-card__title'>{activeMovie?.name}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{activeMovie?.genre}</span>
                <span className='film-card__year'>{activeMovie?.released}</span>
              </p>

              <div className='film-card__buttons'>
                <button className='btn btn--play film-card__button' type='button'>
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className='btn btn--list film-card__button' type='button'>
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'></use>
                  </svg>
                  <span>My list</span>
                  <span className='film-card__count'>9</span>
                </button>
                <Link to={'/review'} className='btn film-card__button'>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className='film-card__wrap film-card__translate-top'>
          <div className='film-card__info'>
            <div className='film-card__poster film-card__poster--big'>
              <img src={activeMovie?.backgroundImage} alt='The Grand Budapest Hotel poster' width='218'
                height='327'
              />
            </div>

            <div className='film-card__desc'>
              <nav className='film-nav film-card__nav'>
                <ul className='film-nav__list'>
                  <li className='film-nav__item film-nav__item--active'>
                    <a href='#' className='film-nav__link'>Overview</a>
                  </li>
                  <li className='film-nav__item'>
                    <a href='#' className='film-nav__link'>Details</a>
                  </li>
                  <li className='film-nav__item'>
                    <a href='#' className='film-nav__link'>Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className='film-rating'>
                <div className='film-rating__score'>{activeMovie?.rating}</div>
                <p className='film-rating__meta'>
                  <span className='film-rating__level'>Very good</span>
                  <span className='film-rating__count'>{activeMovie?.scoresCount} ratings</span>
                </p>
              </div>

              <div className='film-card__text'>
                <p>
                  {activeMovie?.description}
                </p>

                <p className='film-card__director'><strong>Director: {activeMovie?.director}</strong></p>

                <p className='film-card__starring'>
                  <strong>Starring: {activeMovie?.starring.join(', ').slice(0, 3)} and other</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>

          <div className='catalog__films-list'>
            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/fantastic-beasts-the-crimes-of-grindelwald.jpg'
                  alt='Fantastic Beasts: The Crimes of Grindelwald' width='280' height='175'
                />
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='film-page.html'>
                Fantastic Beasts: The Crimes of Grindelwald
                </a>
              </h3>
            </article>

            {/*<article className='small-film-card catalog__films-card'>*/}
            {/*  <div className='small-film-card__image'>*/}
            {/*    <img src='img/bohemian-rhapsody.jpg' alt='Bohemian Rhapsody' width='280' height='175'/>*/}
            {/*  </div>*/}
            {/*  <h3 className='small-film-card__title'>*/}
            {/*    <a className='small-film-card__link' href='film-page.html'>Bohemian Rhapsody</a>*/}
            {/*  </h3>*/}
            {/*</article>*/}

            {/*<article className='small-film-card catalog__films-card'>*/}
            {/*  <div className='small-film-card__image'>*/}
            {/*    <img src='img/macbeth.jpg' alt='Macbeth' width='280' height='175'/>*/}
            {/*  </div>*/}
            {/*  <h3 className='small-film-card__title'>*/}
            {/*    <a className='small-film-card__link' href='film-page.html'>Macbeth</a>*/}
            {/*  </h3>*/}
            {/*</article>*/}

            <article className='small-film-card catalog__films-card'>
              <div className='small-film-card__image'>
                <img src='img/aviator.jpg' alt='Aviator' width='280' height='175'/>
              </div>
              <h3 className='small-film-card__title'>
                <a className='small-film-card__link' href='film-page.html'>Aviator</a>
              </h3>
            </article>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );

};
export default MoviePage;
