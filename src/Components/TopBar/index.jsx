import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { ROUTES } from './../../Constants/ROUTES';

import Logo from './../../Assets/logo.png';

import './index.scss';


const TopBar = () => {
  const avatar = useState(localStorage.getItem('avatar'));
  const nombre = useState(localStorage.getItem('name'));
  const apellido = useState(localStorage.getItem('surName'));

  let navigate = useNavigate()

  const redirectHome = () => {
    navigate(ROUTES.home)
  }

  const redirectAboutUs = () => {
    navigate(ROUTES.about)
  }
  
  const redirectWhere = () => {
    navigate(ROUTES.where)
  }

  const redirectBenefits = () => {
    navigate(ROUTES.benefits)
  }

  const redirectProfile = () => {
    navigate(ROUTES.profile)
  }

    return (
    <div className="top-bar"> 
      <img 
        alt="logo"
        src={Logo}
        onClick={redirectHome}
        className="top-bar__logo"
      />
      <div className="top-bar__items">
        <div
          className="top-bar__items-routes"
          onClick={redirectHome}
        >
          Home
        </div>
        <div
          className="top-bar__items-routes"
          onClick={redirectAboutUs}
        >
          ¿Quienes somos?
        </div>
        <div
          className="top-bar__items-routes" 
          onClick={redirectWhere}
        >
          ¿Donde encontrarnos?
        </div>
        <div
          className="top-bar__items-routes"
          onClick={redirectBenefits}
        >
          Beneficios
        </div>
      </div>
      <div className="top-bar__profile">
        <div className="top-bar__profile-all-name">
          <div className="top-bar__profile-name">
            {nombre}
          </div>
          <div className="top-bar__profile-surname">
            {apellido}
          </div>
        </div>
        <img
          src={avatar} 
          className="top-bar__profile-avatar"
          onClick={redirectProfile}
          alt="foto de perfil"
        />
      </div>
    </div>
  )
}

export default TopBar;