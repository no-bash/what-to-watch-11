import React, {useState} from 'react';

import VideoPlayer from '../VideoPlayer';
import {IMovieData} from '../types/types';
import {Link} from 'react-router-dom';

interface ImovieCardProps extends IMovieData {
  onHover: (name: string) => void;
}


const MovieCard = ({name, previewImage, onHover, previewVideoLink, id}: ImovieCardProps): JSX.Element => {
  const [isPlayerActive, setIsPlayerActive] = useState(false);
  const cardHoverHandler = () => {
    onHover(name);
    setTimeout(() => {
      setIsPlayerActive(true);
    }, 1000);
  };
  if(isPlayerActive) {
    return (
      <VideoPlayer path={previewVideoLink} onMouseOutHandler={() => setIsPlayerActive(false) }/>
    );
  }
  return(
    <article className='small-film-card catalog__films-card' onMouseEnter={() => cardHoverHandler()}>
      <div className='small-film-card__image'>
        <img src={previewImage} alt={'name'} width='280' height='175' />
      </div>
      <h3 className='small-film-card__title'>
        <Link className='small-film-card__link' to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
};
export default MovieCard;
