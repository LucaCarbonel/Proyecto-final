import React from 'react';
import { useNavigate } from "react-router-dom";

import { ROUTES } from './../../Constants/ROUTES';

import Logo from './../../Assets/logo.png';

import './index.scss';

const TopBar = () => {
  let navigate = useNavigate();

    return (
    <div className="top-bar"> 
      <img 
        alt="logo"
        src={Logo}
        onClick={() => navigate(ROUTES.home)}
        className="top-bar__logo"
      />
      <div className="top-bar__items">
        <div className="top-bar__items-item" onClick={() => navigate(ROUTES.home)}>
          Home
        </div>
        <div className="top-bar__items-item" onClick={() => navigate(ROUTES.about)}>
          ¿Quienes somos?
        </div>
        <div className="top-bar__items-item" onClick={() => navigate(ROUTES.where)}>
          ¿Donde encontrarnos?
        </div>
        <div className="top-bar__items-item" onClick={() => navigate(ROUTES.benefits)}>
          Beneficios
        </div>
      </div>
      {localStorage.getItem("access-token") ?
      (<div className="top-bar__profile">
        <div className="top-bar__profile-all-name">
          <div className="top-bar__profile-name">
            Juan
          </div>
          <div className="top-bar__profile-surname">
            Cito
          </div>
        </div>
        <div className="top-bar__profile-avatar">
          avatar
        </div>
      </div>) 
      : (<>
        <div className="top-bar__buttons">
          <button className="top-bar__buttons-button" onClick={() => navigate(ROUTES.signup)}>
            Registrarse
          </button>
          <button className="top-bar__buttons-button" onClick={() => navigate(ROUTES.signin)}>
            Iniciar sesion
          </button>
        </div>
      </>
      )}
    </div>
  )
}

export default TopBar;