import React from 'react';
import { useNavigate } from "react-router-dom";

import { ROUTES } from './../../Constants/ROUTES';

import Logo from './../../Assets/logo.png';

import './index.scss';

const TopBar = () => {
  let navigate = useNavigate();

  const nombre = localStorage.getItem('nombre')
  const apellido = localStorage.getItem('apellido')
  const imgUrl = localStorage.getItem('imgUrl')
  const beneficios = localStorage.getItem('beneficios')

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
        <div className="top-bar__items-item" onClick={() => [navigate(ROUTES.where), console.log(beneficios)]}>
          ¿Donde encontrarnos?
        </div>
        <div className="top-bar__items-item" onClick={() => navigate(ROUTES.benefits)}>
          Beneficios
        </div>
      </div>
      {localStorage.getItem("accessToken") ?
      (<div className="top-bar__profile">
        <div className="top-bar__profile-all-name">
          <div>
            {nombre}
          </div>
          <div>
            {apellido}
          </div>
        </div>
        <img className="top-bar__profile-avatar" src={imgUrl} onClick={() => navigate(ROUTES.profile)}/>
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