import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


export interface IMovieData {
  name: string;
  img: string;
  genre: string;
  releaseDate: number;
}
const movieData: IMovieData[] = [
  {
    name: 'The Grand Budapest Hotel',
    img: 'the-grand-budapest-hotel-poster',
    genre: 'Drama',
    releaseDate: 2014,
  },
  {
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    img: 'fantastic-beasts-the-crimes-of-grindelwald',
    genre: '',
    releaseDate: 1,
  },
  {
    name: 'Bohemian Rhapsody',
    img: 'bohemian-rhapsody',
    genre: '',
    releaseDate: 1,
  },
  {
    name: 'Macbeth',
    img: 'macbeth',
    genre: '',
    releaseDate: 1,
  },
  {
    name: 'Aviator',
    img: 'aviator',
    genre: '',
    releaseDate: 1,
  },
  {
    name: 'We need to talk about Kevin',
    img: 'we-need-to-talk-about-kevin',
    genre: '',
    releaseDate: 1,
  },
  {
    name: 'What We Do in the Shadows',
    img: 'what-we-do-in-the-shadows',
    genre: '',
    releaseDate: 1,
  },
  {
    name: 'Revenant',
    img: 'revenant',
    genre: '',
    releaseDate: 1,
  },
  {
    name: 'Johnny English',
    img: 'johnny-english',
    genre: '',
    releaseDate: 1,
  },
  {
    name: 'Shutter Island',
    img: 'shutter-island',
    genre: '',
    releaseDate: 1,
  },
  {
    name: 'Pulp Fiction',
    img: 'pulp-fiction',
    genre: '',
    releaseDate: 1,
  },
  {
    name: 'No Country for Old Men',
    img: 'no-country-for-old-men',
    genre: '',
    releaseDate: 1,
  },
  {
    name: 'Snatch',
    img: 'snatch',
    genre: '',
    releaseDate: 1,
  },
  {
    name: 'Moonrise Kingdom',
    img: 'moonrise-kingdom',
    genre: '',
    releaseDate: 1,
  },
  {
    name: 'Seven Years in Tibet',
    img: 'seven-years-in-tibet',
    genre: '',
    releaseDate: 1,
  },
  {
    name: 'Midnight Special',
    img: 'midnight-special',
    genre: '',
    releaseDate: 1,
  },
  {
    name: 'War of the Worlds',
    img: 'war-of-the-worlds',
    genre: '',
    releaseDate: 1,
  },
  {
    name: 'Dardjeeling Limited',
    img: 'dardjeeling-limited',
    genre: '',
    releaseDate: 1,
  },
  {
    name: 'Orlando',
    img: 'orlando',
    genre: '',
    releaseDate: 1,
  },
  {
    name: 'Mindhunter',
    img: 'mindhunter',
    genre: '',
    releaseDate: 1,
  },
  {
    name: 'Midnight Special',
    img: 'midnight-special',
    genre: '',
    releaseDate: 1,
  },
];

root.render(
  <React.StrictMode>
    <App movieData={movieData} />
  </React.StrictMode>,
);
