import React from 'react';
import {Route} from "react-router-dom";
import SignIn from "./SignIn";

interface IRouterProps {
  Component: JSX.Element,
  path: string,
  auth: boolean,

}
const ProtectedRoute => (
  {
    user,
    redirectPath = '/landing',
    children,
                        }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};
export default PrivateRoute
