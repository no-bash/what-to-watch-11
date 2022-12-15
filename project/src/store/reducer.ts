
import {createReducer} from '@reduxjs/toolkit';
import {checkAuthAction, handleMoviesAction, loginAction, logoutAction, setGenreAction, setIsLoad} from './actions';
import {IMovieData} from '../types/types';

export interface IUser {
  avatarUrl: string;
  email: string;
  id: number;
  name: string;
  token: string;
}

export interface InitialState {
  movies: IMovieData[];
  genres: string[];
  activeGenre: string;
  isLoad: boolean;
  authorizationStatus: boolean;
  user: IUser | null;
}

const initialState:InitialState = {
  movies: [],
  genres: ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'],
  activeGenre: 'All genres',
  isLoad: false,
  authorizationStatus: false,
  user: null
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(handleMoviesAction, (state, action) => {
      state.movies = action.payload;
    })
    .addCase(setGenreAction, (state, action) => {
      state.activeGenre = action.payload;
      state.movies = state.movies.filter((movie) => movie.genre === action.payload);
    })
    .addCase(setIsLoad, (state) => {
      state.isLoad = !state.isLoad;
    })
    .addCase(checkAuthAction, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loginAction, (state, action) => {
      state.user = action.payload;
    })
    .addCase(logoutAction, (state) => {
      state.user = null;
    });
});

