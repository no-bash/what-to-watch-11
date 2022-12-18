import ReviewForm from './review-form';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {store} from '../../store';
import {useEffect} from 'react';
import {handleFilmAction} from '../../store/actions';
import {InitialState} from '../../store/reducer';

const AddReview = (): JSX.Element => {
  const params = useParams<{id: string}>();
  const dispatch = useDispatch<typeof store.dispatch>();
  useEffect(() => {
    dispatch(handleFilmAction(Number(params.id)));
  }, []);
  const {activeMovie} = useSelector((state: InitialState) => state);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={activeMovie?.backgroundImage} alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${params?.id || ''}`} className="breadcrumbs__link">{activeMovie?.name}</Link>
              </li>

            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={activeMovie?.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewForm />
      </div>

    </section>

  );
};
export default AddReview;
