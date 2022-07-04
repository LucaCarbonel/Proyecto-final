import React, { useEffect } from 'react';
import axios from 'axios';
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
import Where from './../Where';
import NotFound from './../NotFound';
import Contactos from './../../Components/Contactos';

import './index.scss';

const App = () => {
  useEffect(() => {
    axios.get('https://random-data-api.com/api/users/random_user').then(({data}) => {
      localStorage.setItem('name', data.last_name)
      localStorage.setItem('surName', data.first_name)
      localStorage.setItem('avatar', data.avatar);
    });
  }, [])
  return (
  <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route exact path={ROUTES.home} element={<Home/>} />
        <Route exact path={ROUTES.profile} element={<Profile/>} />
        <Route exact path={ROUTES.signin} element={<SignIn/>} />
        <Route exact path={ROUTES.signup} element={<SignUp/>} />
        <Route exact path={ROUTES.about} element={<AboutUs/>} />
        <Route exact path={ROUTES.where} element={<Where/>} />
        <Route exact path={ROUTES.benefits} element={<Benefits/>} />
        <Route exact path="/contactos" element={<Contactos/>} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App;