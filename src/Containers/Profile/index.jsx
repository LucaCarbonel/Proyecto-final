import React from 'react';
import { useNavigate } from "react-router-dom";
import cn from 'classnames';

import loggedRoute from "./../../Hocs/loggedRoute"
import { ROUTES } from './../../Constants/ROUTES';

import {ReactComponent as Back} from './../../Assets/back.svg';
import {ReactComponent as Building} from './../../Assets/building.svg';
import {ReactComponent as Maps} from './../../Assets/maps.svg';
import {ReactComponent as Logout} from './../../Assets/logout.svg';
import {ReactComponent as Card} from './../../Assets/card.svg';

import './index.scss'

const Profile = () => {
  const imgUrl = localStorage.getItem('imgUrl')
  const name = localStorage.getItem('nombre')
  const surName = localStorage.getItem('apellido')
  const company = localStorage.getItem('empresa')
  const ubication = localStorage.getItem('ubicacion')
  const role = localStorage.getItem('rol')
  const navigate = useNavigate();

  const handlerLogout = () => {
    localStorage.removeItem('nombre');
    localStorage.removeItem('apellido');
    localStorage.removeItem('email');
    localStorage.removeItem('empresa');
    localStorage.removeItem('password');
    localStorage.removeItem('imgUrl');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('rol');
    console.log(ROUTES)
    navigate(ROUTES.home)
  }
  return (
    <div className="profile">
      <div className="profile__back" onClick={() => navigate(-1)}>
        <Back />
        Perfil
      </div>
      <div className="profile__top" />
      <img
        src={imgUrl} 
        className="profile__img"
      />
      <div className="profile__name">
        <div>{name}</div>
        {surName}
      </div>
      {ubication && 
        <div className="profile__company">
          <Maps className="profile__icon"/>
          {ubication}
        </div>
      }
      {company && 
        <div className="profile__company">
          <Building className="profile__icon"/>
          {company}
        </div>
      }
      <div className={cn("profile__buttons", {"margin-left": role === "recolector"})}>
        <div className="profile__buttons-button" onClick={() => handlerLogout()}>
          <Logout className="profile__icon"/>
          Cerrar sesion
        </div>
        {role === "recolector" ?(
          <div className="profile__buttons-button" style={{marginLeft: '30px'}} onClick={() => navigate(ROUTES.users)}>
            <Card className="profile__icon"/>
            Acreditar Tokens
          </div>
        ):(null)
      }
      </div>
    </div>
  )
}

export default loggedRoute(Profile);