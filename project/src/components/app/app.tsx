import React from 'react';
import MainPage from '../../pages/MainPage';
import { IMovieData } from '../../index';

function App({ movieData }: { movieData: IMovieData[] }): JSX.Element {

  return (
    <MainPage movieData={movieData} />
  );
}

export default App;
