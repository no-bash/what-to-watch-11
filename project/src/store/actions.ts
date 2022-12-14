import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {IMovieData} from '../types/types';
import {store} from './index';
import {InitialState} from './reducer';
import { AxiosInstance} from 'axios';

export const setGenreAction = createAction('movies/setGenreAction', (genre: string) => ({
  payload: genre
}));

export const setIsLoad = createAction('movies/setIsLoad');

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
