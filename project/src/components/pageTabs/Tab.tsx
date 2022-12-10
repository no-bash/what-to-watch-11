import React, {useState} from 'react';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('overview');
  return(
    <div className='film-card__desc'>
      <nav className='film-nav film-card__nav'>
        <ul className='film-nav__list'>
          <li className={`film-nav__item ${activeTab === 'overview' ? 'film-nav__item--active' : ''}`}>
            <span className='film-nav__link  ' onClick={()=>setActiveTab('overview')}>Overview</span>
          </li>
          <li className={`film-nav__item ${activeTab === 'details' ? 'film-nav__item--active' : ''}`}>
            <span className='film-nav__link' onClick={()=>setActiveTab('details')}>Details</span>
          </li>
          <li className={`film-nav__item ${activeTab === 'reviews' ? 'film-nav__item--active' : ''}`}>
            <span className='film-nav__link' onClick={()=>setActiveTab('reviews')}>Reviews</span>
          </li>
        </ul>
      </nav>

      {activeTab === 'overview' ?
        <div className='film-card__text film-card__row'>
          <div className='film-card__text-col'>
            <p className='film-card__details-item'>
              <strong className='film-card__details-name'>Director</strong>
              <span className='film-card__details-value'>Wes Anderson</span>
            </p>
            <p className='film-card__details-item'>
              <strong className='film-card__details-name'>Starring</strong>
              <span className='film-card__details-value'>
                    Bill Murray,
                    Edward Norton,
                    Jude Law,
                    Willem Dafoe,
                    Saoirse Ronan,
                    Tony Revoloru,
                    Tilda Swinton,
                    Tom Wilkinson,
                    Owen Wilkinson,
                    Adrien Brody,
                    Ralph Fiennes,
                    Jeff Goldblum
              </span>
            </p>
          </div>

          <div className='film-card__text-col'>
            <p className='film-card__details-item'>
              <strong className='film-card__details-name'>Run Time</strong>
              <span className='film-card__details-value'>1h 39m</span>
            </p>
            <p className='film-card__details-item'>
              <strong className='film-card__details-name'>Genre</strong>
              <span className='film-card__details-value'>Comedy</span>
            </p>
            <p className='film-card__details-item'>
              <strong className='film-card__details-name'>Released</strong>
              <span className='film-card__details-value'>2014</span>
            </p>
          </div>
        </div> : null}
      {activeTab === 'details' ?
        <div className="film-card__reviews film-card__row">
          <div className="film-card__reviews-col">
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious
                  Mittel-European kitsch of one of the directors funniest and most exquisitely designed films in years.
                </p>

                <footer className="review__details">
                  <cite className="review__author">Kate Muir</cite>
                  <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
                </footer>
              </blockquote>

              <div className="review__rating">8,9</div>
            </div>

            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">Andersons films are too precious for some, but for those of us willing to lose
                  ourselves in them, theyre a delight. The Grand Budapest Hotel is no different, except that he has added
                  a hint of gravitas to the mix, improving the recipe.
                </p>

                <footer className="review__details">
                  <cite className="review__author">Bill Goodykoontz</cite>
                  <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                </footer>
              </blockquote>

              <div className="review__rating">8,0</div>
            </div>

            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">I didnt find it amusing, and while I can appreciate the creativity, its an
                  hour and 40 minutes I wish I could take back
                </p>

                <footer className="review__details">
                  <cite className="review__author">Amanda Greever</cite>
                  <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                </footer>
              </blockquote>

              <div className="review__rating">8,0</div>
            </div>
          </div>
          <div className="film-card__reviews-col">
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and
                  here and there, gruesome and/or heartbreaking.
                </p>

                <footer className="review__details">
                  <cite className="review__author">Matthew Lickona</cite>
                  <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                </footer>
              </blockquote>

              <div className="review__rating">7,2</div>
            </div>

            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content
                  is a little more adult.
                </p>

                <footer className="review__details">
                  <cite className="review__author">Paula Fleri-Soler</cite>
                  <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                </footer>
              </blockquote>

              <div className="review__rating">7,6</div>
            </div>

            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content
                  is a little more adult.
                </p>

                <footer className="review__details">
                  <cite className="review__author">Paula Fleri-Soler</cite>
                  <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                </footer>
              </blockquote>

              <div className="review__rating">7,0</div>
            </div>
          </div>
        </div> : null}
      {activeTab === 'reviews' ?
        <div className="film-card__text film-card__row">
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Director</strong>
              <span className="film-card__details-value">Wes Anderson</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Starring</strong>
              <span className="film-card__details-value">
                    Bill Murray, <br />
                    Edward Norton, <br />
                    Jude Law, <br />
                    Willem Dafoe, <br />
                    Saoirse Ronan, <br />
                    Tony Revoloru, <br />
                    Tilda Swinton, <br />
                    Tom Wilkinson,<br />
                    Owen Wilkinson, <br />
                    Adrien Brody, <br />
                    Ralph Fiennes,<br />
                    Jeff Goldblum
              </span>
            </p>
          </div>

          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Run Time</strong>
              <span className="film-card__details-value">1h 39m</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Genre</strong>
              <span className="film-card__details-value">Comedy</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Released</strong>
              <span className="film-card__details-value">2014</span>
            </p>
          </div>
        </div> : null}
    </div>
  );
};

export default Tab;
