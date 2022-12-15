import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {handleLoginAction} from '../store/actions';
import {store} from '../store';
import {InitialState} from '../store/reducer';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<typeof store.dispatch>();
  const {user, authorizationStatus} = useSelector((state: InitialState) => state);
  useEffect(() => {
    console.log(user, authorizationStatus);
  }, [user, authorizationStatus]);
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

        <h1 className='page-title user-page__title'>Sign in</h1>
      </header>

      <div className='sign-in user-page__content'>
        <form action='#' className='sign-in__form'>
          <div className='sign-in__fields'>
            <div className='sign-in__field'>
              <input onChange={(event) => {setEmail(event.currentTarget.value);}}
                value={email}
                className='sign-in__input' type='email' placeholder='Email address' name='user-email'
                id='user-email'
              />
              <label className='sign-in__label visually-hidden' htmlFor='user-email'>Email address</label>
            </div>
            <div className='sign-in__field'>
              <input
                onChange={(event) => {setPassword(event.currentTarget.value);}}
                value={password}
                className='sign-in__input' type='password' placeholder='Password' name='user-password'
                id='user-password'
              />
              <label className='sign-in__label visually-hidden' htmlFor='user-password'>Password</label>
            </div>
          </div>
          <div className='sign-in__submit'>
            <button onClick={(event) => {
              event.preventDefault();
              dispatch(handleLoginAction({email, password}));
              setPassword('');
              setEmail('');
            }}
            className='sign-in__btn' type='submit'
            >Sign in
            </button>
          </div>
        </form>
      </div>

      <footer className='page-footer'>
        <div className='logo'>
          <a href='main.html' className='logo__link logo__link--light'>
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
  );
};
export default SignIn;
