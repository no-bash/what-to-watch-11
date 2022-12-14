
import {createReducer} from '@reduxjs/toolkit';
import { handleMoviesAction, setGenreAction, setIsLoad} from './actions';
import {IMovieData} from '../types/types';

export interface InitialState {
  movies: IMovieData[];
  genres: string[];
  activeGenre: string;
  isLoad: boolean;
}

const initialState:InitialState = {
  movies: [],
  genres: ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'],
  activeGenre: 'All genres',
  isLoad: false
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
    });
});

