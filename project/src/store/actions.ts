import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {IMovieData} from '../types/types';
import {store} from './index';
import {InitialState, IUser} from './reducer';
import { AxiosInstance} from 'axios';

export const setGenreAction = createAction('movies/setGenreAction', (genre: string) => ({
  payload: genre
}));

export const setIsLoad = createAction('movies/setIsLoad');

export const checkAuthAction = createAction('user/checkAuthAction', (authStatus:boolean)=> ({payload: authStatus}));

export const loginAction = createAction('user/loginAction', (user: IUser)=> ({payload: user}));

export const logoutAction = createAction('user/logoutAction');


export const handleMoviesAction = createAction('movies/handleMoviesAction', (movies: IMovieData[]) => ({payload: movies}));

export const getMoviesAction = createAsyncThunk<void, undefined, {
  dispatch: typeof store.dispatch;
  state: InitialState;
  extra: AxiosInstance;
}>(
  'movies/getMoviesAction',
  async (_, {dispatch, extra} ) => {
    dispatch(setIsLoad());
    const { data } = await extra.get<IMovieData[]>('/films');
    dispatch(setIsLoad());
    dispatch(handleMoviesAction(data));
  }
);

export const handleCheckAuthAction = createAsyncThunk<void, undefined, {
  dispatch: typeof store.dispatch;
  state: InitialState;
  extra: AxiosInstance;
}>(
  'user/handleCheckAuthAction',
  async (_, {dispatch, extra} ) => {
    try {
      await extra.get<IUser>('/login');
      dispatch(checkAuthAction(true));
    } catch {
      dispatch(checkAuthAction(false));
    }
  }
);

export const handleLoginAction = createAsyncThunk<void, {password: string; email: string}, {
  dispatch: typeof store.dispatch;
  state: InitialState;
  extra: AxiosInstance;
}>(
  'user/handleLoginAction',
  async ({password, email}, {dispatch, extra} ) => {

    const { data } = await extra.post<IUser>('/login', {password, email});

    if(data.token) {
      window.localStorage.setItem('token', data.token);
    }
    dispatch(loginAction(data));
    dispatch(checkAuthAction(true));
  }
);

export const handleLogoutAction = createAsyncThunk<void, undefined, {
  dispatch: typeof store.dispatch;
  state: InitialState;
  extra: AxiosInstance;
}>(
  'user/handleCheckAuthAction',
  async (_, {dispatch, extra} ) => {

    await extra.delete<IUser>('/login');

    dispatch(logoutAction());
    dispatch(checkAuthAction(false));
    window.localStorage.removeItem('token');
  }
);
