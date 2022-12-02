import React from 'react';
import {IMovieData} from '../index';

const MovieCard = ({name, img, genre, releaseDate}: IMovieData): JSX.Element => (

  <article className='small-film-card catalog__films-card'>
    <div className='small-film-card__image'>

      {/*eslint-disable-next-line*/}
      <img src={require(`../../public/img/${img}.jpg`)}

        alt={'name'} width='280' height='175'
      />
    </div>
    <h3 className='small-film-card__title'>
      <a className='small-film-card__link' href='film-page.html'>{name}</a>
    </h3>
  </article>
);
export default MovieCard;
