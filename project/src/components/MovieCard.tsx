import React, {useState} from 'react';
import {IMovieData} from '../index';
import VideoPlayer from '../VideoPlayer';

interface ImovieCardProps extends IMovieData {
  onHover: (name: string) => void;
}


const MovieCard = ({name, img, genre, releaseDate, onHover, previewVideoLink}: ImovieCardProps): JSX.Element => {
  const [isPlayerActive, setIsPlayerActive] = useState(false);
  const cardHoverHandler = () => {
    onHover(name);
    setTimeout(() => {
      setIsPlayerActive(true);
    }, 1000);
  };
  return(
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isPlayerActive ? <VideoPlayer path={previewVideoLink} onMouseOutHandler={() => setIsPlayerActive(false) }/> :
        <article className='small-film-card catalog__films-card' onMouseEnter={() => cardHoverHandler()}>
          <div className='small-film-card__image'>

            {/*eslint-disable-next-line*/}
            <img src={require(`../../public/img/${img}.jpg`)} alt={'name'} width='280' height='175' />
          </div>
          <h3 className='small-film-card__title'>
            <a className='small-film-card__link' href='film-page.html'>{name}</a>
          </h3>
        </article>}
    </>
  );
};
export default MovieCard;
