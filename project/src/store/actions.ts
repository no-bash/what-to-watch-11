import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {IComment, IMovieData} from '../types/types';
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


export const getMovieAction = createAction('movies/getMovieAction', (movie: IMovieData) => ({payload: movie}));

export const getSimilarAction = createAction('movies/getSimilarAction', (movie: IMovieData[]) => ({payload: movie}));

export const getPromoAction = createAction('movies/getPromoAction', (movie: IMovieData) => ({payload: movie}));

export const getCommentsAction = createAction('movies/getCommentsAction', (data: IComment[]) => ({payload: data}));


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
    window.history.back();
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

export const handleFilmAction = createAsyncThunk<void, number, {
  dispatch: typeof store.dispatch;
  state: InitialState;
  extra: AxiosInstance;
}>(
  'movies/handleFilmAction',
  async (id, {dispatch, extra} ) => {
    dispatch(setIsLoad());
    const { data } = await extra.get<IMovieData>(`/films/${id}`);
    dispatch(setIsLoad());
    dispatch(getMovieAction(data));
  }
);

export const handleSimilarAction = createAsyncThunk<void, number, {
  dispatch: typeof store.dispatch;
  state: InitialState;
  extra: AxiosInstance;
}>(
  'movies/handleSimilarAction',
  async (id, {dispatch, extra} ) => {
    dispatch(setIsLoad());
    const { data } = await extra.get<IMovieData[]>(`/films/${id}/similar`);
    dispatch(setIsLoad());
    dispatch(getSimilarAction(data));
  }
);

export const handlePromoAction = createAsyncThunk<void, undefined, {
  dispatch: typeof store.dispatch;
  state: InitialState;
  extra: AxiosInstance;
}>(
  'movies/handlePromoAction',
  async (_, {dispatch, extra} ) => {

    const { data } = await extra.get<IMovieData>('/promo');

    dispatch(getPromoAction(data));
  }
);

export const handleAddCommentAction = createAsyncThunk<void, { comment: string; rating: number; id: number }, {
  dispatch: typeof store.dispatch;
  state: InitialState;
  extra: AxiosInstance;
}>(
  'movies/handleAddCommentAction',
  async ({comment, rating, id}, {dispatch, extra} ) => {
    await extra.post<IMovieData[]>(`/comments/${id}`, {comment, rating});
    window.history.back();
  }
);

export const handleGetCommentAction = createAsyncThunk<void, number, {
  dispatch: typeof store.dispatch;
  state: InitialState;
  extra: AxiosInstance;
}>(
  'movies/handleAddCommentAction',
  async (id, {dispatch, extra} ) => {
    const { data } = await extra.get<IComment[]>(`/comments/${id}`);
    dispatch(getCommentsAction(data));
  }
);
