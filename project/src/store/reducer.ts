
import {createReducer} from '@reduxjs/toolkit';
import {
  checkAuthAction, getCommentsAction,
  getMovieAction, getPromoAction, getSimilarAction,
  handleMoviesAction,
  loginAction,
  logoutAction,
  setGenreAction,
  setIsLoad
} from './actions';
import {IComment, IMovieData} from '../types/types';

export interface IUser {
  avatarUrl: string;
  email: string;
  id: number;
  name: string;
  token: string;
}

export interface InitialState {
  movies: IMovieData[];
  activeMovie: IMovieData | null;
  genres: string[];
  activeGenre: string;
  isLoad: boolean;
  authorizationStatus: boolean;
  user: IUser | null;
  similar: IMovieData[] | null;
  promo: IMovieData | null;
  comments: IComment[] | null;
  allMovies: IMovieData[] | null;
}

const initialState:InitialState = {
  movies: [],
  genres: [],
  activeGenre: 'All genres',
  isLoad: false,
  authorizationStatus: false,
  user: null,
  activeMovie: null,
  similar: null,
  promo: null,
  comments: null,
  allMovies: null,
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(handleMoviesAction, (state, action) => {
      state.allMovies = action.payload;
      state.genres = [...new Set(action.payload.map((film) => film.genre))];
      state.movies = action.payload;
    })
    .addCase(setGenreAction, (state, action) => {
      state.activeGenre = action.payload;

      state.movies = state.allMovies?.filter((movie) => {
        if(action.payload === 'All genre') {
          return true;
        }
        return movie.genre.toLowerCase() === action.payload.toLowerCase();
      }) || [];
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
    })
    .addCase(getMovieAction, (state, action) => {
      state.activeMovie = action.payload;
    })
    .addCase(getSimilarAction, (state, action) => {
      state.similar = action.payload;
    })
    .addCase(getPromoAction, (state, action) => {
      state.promo = action.payload;
    } )
    .addCase(getCommentsAction, (state, action) => {
      state.comments = action.payload;
    });
});

