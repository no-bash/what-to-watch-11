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

function App({ movieData }: { movieData: IMovieData[] }): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage movieData={movieData} />} />
        <Route path={'/login'} element={<SignIn />} />
        <Route path='mylist' element={
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        }
        />
        <Route path={'/films/:id'} element={<MyList />} />
        <Route path={'/films/:id/review'} element={<AddReview />} />
        <Route path={'/player/:id'} element={<Player />} />
        <Route path={'*'} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
