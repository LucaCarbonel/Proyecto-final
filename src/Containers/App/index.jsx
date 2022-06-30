import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { ROUTES } from './../../Constants/ROUTES';

import Home from './../Home';
import Profile from './../Profile';
import SignIn from './../SignIn';
import SignUp from './../SignUp';
import AboutUs from './../AboutUs';
import Benefits from './../Benefits';
import NotFound from './../NotFound';
import './index.scss';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route exact path={ROUTES.home} element={<Home/>} />
      <Route exact path={ROUTES.profile} element={<Profile/>} />
      <Route exact path={ROUTES.signin} element={<SignIn/>} />
      <Route exact path={ROUTES.signup} element={<SignUp/>} />
      <Route exact path={ROUTES.about} element={<AboutUs/>} />
      <Route exact path={ROUTES.benefits} element={<Benefits/>} />
    </Routes>
  </BrowserRouter>
);

export default App;