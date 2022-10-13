import React from 'react';
import { Navigate } from 'react-router';
import { ROUTES } from './../Constants/ROUTES';

const unloggedRoute = (Component) => (
  () => {
    if (localStorage.getItem('accessToken')) {
      return <Navigate to={ROUTES.home} />;
    }
    return <Component />;
  }
);

export default unloggedRoute