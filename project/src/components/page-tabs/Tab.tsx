import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {InitialState} from '../../store/reducer';
import {store} from '../../store';
import {handleGetCommentAction} from '../../store/actions';
import {useParams} from 'react-router-dom';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const {activeMovie, comments} = useSelector((state: InitialState) => state);
  const dispatch = useDispatch<typeof store.dispatch>();
  const params = useParams<{id: string}>();
  useEffect(() => {
    if(params.id) {
      dispatch(handleGetCommentAction(Number(params.id)));
    }
  }, []);

  return(
    <div className='film-card__desc'>
      <nav className='film-nav film-card__nav'>
        <ul className='film-nav__list'>
          <li className={`film-nav__item ${activeTab === 'overview' ? 'film-nav__item--active' : ''}`}>
            <span className='film-nav__link  ' onClick={()=>setActiveTab('overview')}>Overview</span>
          </li>
          <li className={`film-nav__item ${activeTab === 'details' ? 'film-nav__item--active' : ''}`}>
            <span className='film-nav__link' onClick={()=>setActiveTab('details')}> Reviews</span>
          </li>
          <li className={`film-nav__item ${activeTab === 'reviews' ? 'film-nav__item--active' : ''}`}>
            <span className='film-nav__link' onClick={()=>setActiveTab('reviews')}>Details</span>
          </li>
        </ul>
      </nav>

      {activeTab === 'reviews' ?
        <div className='film-card__text film-card__row'>
          <div className='film-card__text-col'>
            <p className='film-card__details-item'>
              <strong className='film-card__details-name'>Director</strong>
              <span className='film-card__details-value'>{activeMovie?.director}</span>
            </p>
            <p className='film-card__details-item'>
              <strong className='film-card__details-name'>Starring</strong>
              <span className='film-card__details-value'>
                {activeMovie?.starring.join(', ').slice(0, 3)}
              </span>
            </p>
          </div>

          <div className='film-card__text-col'>
            <p className='film-card__details-item'>
              <strong className='film-card__details-name'>Run Time</strong>
              <span className='film-card__details-value'>{activeMovie?.runTime}</span>
            </p>
            <p className='film-card__details-item'>
              <strong className='film-card__details-name'>Genre</strong>
              <span className='film-card__details-value'>{activeMovie?.genre}</span>
            </p>
            <p className='film-card__details-item'>
              <strong className='film-card__details-name'>Released</strong>
              <span className='film-card__details-value'>{activeMovie?.released}</span>
            </p>
          </div>
        </div> : null}
      {activeTab === 'details' ?
        <div className="film-card__reviews film-card__row">
          <div className="film-card__reviews-col">
            {comments?.map((commentData) => (
              <div className="review" key={commentData.id}>
                <blockquote className="review__quote">
                  <p className="review__text">
                    {commentData.comment}
                  </p>

                  <footer className="review__details">
                    <cite className="review__author">{commentData.user.name}</cite>
                    <time className="review__date" dateTime="2016-12-24">{commentData.date}</time>
                  </footer>
                </blockquote>

                <div className="review__rating">{commentData.rating}</div>
              </div>
            ))}


          </div>
        </div> : null}
      {activeTab === 'overview' ?
        <div className="film-card__text film-card__row">
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Director</strong>
              <span className="film-card__details-value">{activeMovie?.director}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Starring</strong>
              <span className="film-card__details-value">
                {activeMovie?.starring.map((data) => (
                  <>
                    {data}, <br />
                  </>
                ))}

              </span>
            </p>
          </div>

          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Run Time</strong>
              <span className="film-card__details-value">{activeMovie?.runTime}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Genre</strong>
              <span className="film-card__details-value">{activeMovie?.genre}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Released</strong>
              <span className="film-card__details-value">{activeMovie?.released}</span>
            </p>
          </div>
        </div> : null}
    </div>
  );
};

export default Tab;
