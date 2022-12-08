import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import {IMovieData} from '../../index';
import SignIn from '../SignIn';
import MyList from '../MyList';
import Player from '../Player';
import AddReview from '../AddReview';
import Page404 from '../../pages/Page404';
import PrivateRoute from '../PrivateRoute';
import MoviePageDetails from '../MoviePageDetails';

export interface IReviewData {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    id: number;
    name: string;
  };
}

export const reviewData = [{
  comment: 'Aboba',
  date: '21.02.2002',
  id: 1,
  rating: 10,
  user: {
    id: 12345,
    name: ''
  }
}];

export interface IplayerData {
  runTime: number;
  videoLink: string;
}

const playerData: IplayerData = {
  runTime: 10,
  videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
};

function App({ movieData }: { movieData: IMovieData[] }): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage movieData={movieData} />} />
        <Route path={'/login'} element={<SignIn />} />
        <Route path='mylist' element={
          <PrivateRoute>
            <MyList movieData={movieData} />
          </PrivateRoute>
        }
        />
        <Route path={'/films/:id'} element={<MoviePageDetails />} />
        <Route path={'/player/:id'} element={<Player {...playerData} />} />
        <Route path={'/films/:id/review'} element={<AddReview />} />
        <Route path={'*'} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
