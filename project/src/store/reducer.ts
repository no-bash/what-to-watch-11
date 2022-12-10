
import {createReducer} from '@reduxjs/toolkit';
import {getMoviesAction, setGenreAction} from './actions';
import {IMovieData} from '../types/types';

export interface InitialState {
  movies: IMovieData[];
  genres: string[];
  activeGenre: string;
}

const initialState:InitialState = {
  movies: [],
  genres: ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'],
  activeGenre: 'All genres',
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getMoviesAction, (state, action) => {
      state.movies = action.payload;
    })
    .addCase(setGenreAction, (state, action) => {
      state.activeGenre = action.payload;
      state.movies = state.movies.filter((movie) => movie.genre === action.payload);
    });
});

