import React from 'react';
import { Redirect } from 'react-router';
import { ROUTES } from '../data/constants';

export default (Component) => (
  () => {
    if (!localStorage.getItem('accessToken')) {
      return <Redirect to={ROUTES.signin} />;
    }
    return <Component />;
  }
);