import {createAction} from '@reduxjs/toolkit';
import {IMovieData} from '../types/types';


const movieData: IMovieData[] = [
  {
    name: 'The Grand Budapest Hotel',
    img: 'the-grand-budapest-hotel-poster',
    genre: 'Drama',
    releaseDate: 2014,
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm'
  },
  {
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    img: 'fantastic-beasts-the-crimes-of-grindelwald',
    genre: '',
    releaseDate: 1,
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    name: 'Bohemian Rhapsody',
    img: 'bohemian-rhapsody',
    genre: '',
    releaseDate: 1,
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    name: 'Macbeth',
    img: 'macbeth',
    genre: '',
    releaseDate: 1,
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    name: 'Aviator',
    img: 'aviator',
    genre: '',
    releaseDate: 1,
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    name: 'We need to talk about Kevin',
    img: 'we-need-to-talk-about-kevin',
    genre: '',
    releaseDate: 1,
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    name: 'What We Do in the Shadows',
    img: 'what-we-do-in-the-shadows',
    genre: '',
    releaseDate: 1,
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    name: 'Revenant',
    img: 'revenant',
    genre: '',
    releaseDate: 1,
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    name: 'Johnny English',
    img: 'johnny-english',
    genre: '',
    releaseDate: 1,
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    name: 'Shutter Island',
    img: 'shutter-island',
    genre: '',
    releaseDate: 1,
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    name: 'Pulp Fiction',
    img: 'pulp-fiction',
    genre: '',
    releaseDate: 1,
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    name: 'No Country for Old Men',
    img: 'no-country-for-old-men',
    genre: '',
    releaseDate: 1,
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    name: 'Snatch',
    img: 'snatch',
    genre: '',
    releaseDate: 1,
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    name: 'Moonrise Kingdom',
    img: 'moonrise-kingdom',
    genre: '',
    releaseDate: 1,
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    name: 'Seven Years in Tibet',
    img: 'seven-years-in-tibet',
    genre: '',
    releaseDate: 1,
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    name: 'Midnight Special1',
    img: 'midnight-special',
    genre: '',
    releaseDate: 1,
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    name: 'War of the Worlds',
    img: 'war-of-the-worlds',
    genre: '',
    releaseDate: 1,
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    name: 'Dardjeeling Limited',
    img: 'dardjeeling-limited',
    genre: '',
    releaseDate: 1,
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    name: 'Orlando',
    img: 'orlando',
    genre: '',
    releaseDate: 1,
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    name: 'Mindhunter',
    img: 'mindhunter',
    genre: '',
    releaseDate: 1,
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    name: 'Midnight Special',
    img: 'midnight-special',
    genre: '',
    releaseDate: 1,
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
];


export const getMoviesAction = createAction('movies/getMoviesAction', () => ({
  payload: movieData
}));

export const setGenreAction = createAction('movies/setGenreAction', (genre: string) => ({
  payload: genre
}));
