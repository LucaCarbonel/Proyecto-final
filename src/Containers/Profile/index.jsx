import React from 'react';
import { useNavigate } from "react-router-dom";

import loggedRoute from "./../../Hocs/loggedRoute"

import {ReactComponent as Back} from './../../Assets/back.svg';
import {ReactComponent as Building} from './../../Assets/building.svg';
import {ReactComponent as Maps} from './../../Assets/maps.svg';

import './index.scss'

const Profile = () => {
  const imgUrl = localStorage.getItem('imgUrl')
  const name = localStorage.getItem('nombre')
  const surName = localStorage.getItem('apellido')
  const company = localStorage.getItem('empresa')
  const ubication = localStorage.getItem('ubicacion')
  const navigate = useNavigate();
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
    </div>
  )
}

export default loggedRoute(Profile);