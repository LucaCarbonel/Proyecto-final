import React from 'react';
import { useNavigate } from "react-router-dom";

import { ROUTES } from './../../Constants/ROUTES';

// import { ReactComponent as Logo } from './../../Assets/logo.svg';
import Logo from './../../Assets/logo.png';

import './index.scss';


const TopBar = () => {
  let navigate = useNavigate();

  const redirectHome = () => {
    navigate(ROUTES.home)
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
        <div>
          Home
        </div>
        <div>
          ¿Quienes somos?
        </div>
        <div>
          ¿Donde encontrarnos?
        </div>
        <div>
          Beneficios
        </div>
      </div>
      <div className="top-bar__profile">
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
      </div>
    </div>
  )
}

export default TopBar;