import React, { Component } from 'react';
import {BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import {IMovieData} from '../../index';
import SignIn from "../SignIn";
import MyList from "../MyList";
import Player from "../Player";
import AddReview from "../AddReview";
import Page404 from "../../pages/Page404";
import PrivateRoute from "../PrivateRoute";

function App({ movieData }: { movieData: IMovieData[] }): JSX.Element {
  const auth = false
  const ProtectedRoute = (
    {
      auth,
      redirectPath = '/login',
      children,
    }:{
      auth: boolean,
      redirectPath: string,
      children
    } ) => {
    if (!auth) {
      return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'}  element={<MainPage movieData={movieData}/>} />
        <Route path={'/login'}  element={<SignIn />} />
        {/*<Route path={'/mylist'} element={<MyList />} />*/}

        <Route element={<ProtectedRoute auth={auth} />}>
          <Route path="/login" element={<SignIn />} />
          <Route path="/mylist" element={<MyList />} />
        </Route>

        {/*<PrivateRoute component ={<MyList />}  path={"/mylist"}  auth={auth}  />*/}

        <Route path={'/films/:id'} element={<MyList />} />
        <Route path={'/films/:id/review'} element={<AddReview />} />
        <Route path={'/player/:id'} element={<Player />} />
        <Route path={'*'} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
    //
  // <MainPage movieData={movieData}/>
  );
}

export default App;
