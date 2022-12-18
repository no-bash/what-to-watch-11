import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {handleLoginAction} from '../store/actions';
import {store} from '../store';
import {InitialState} from '../store/reducer';
import Header from './header';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<typeof store.dispatch>();
  const {user, authorizationStatus} = useSelector((state: InitialState) => state);
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {
  }, [user, authorizationStatus]);
  return(
    <div className='user-page'>
      <Header />

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


    </div>
  );
};
export default SignIn;
