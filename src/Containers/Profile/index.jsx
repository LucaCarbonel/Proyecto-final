import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import cn from 'classnames';

import loggedRoute from "./../../Hocs/loggedRoute"
import { ROUTES } from './../../Constants/ROUTES';
import { getUser, getBenefactor } from '../../Api/index.js';

import {ReactComponent as Back} from './../../Assets/back.svg';
import {ReactComponent as Building} from './../../Assets/building.svg';
import {ReactComponent as Logout} from './../../Assets/logout.svg';
import {ReactComponent as Card} from './../../Assets/card.svg';

import './index.scss'

const Profile = () => {
  const [name, setname] = useState('')
  const [surName, setSurname] = useState('')
  const [role, setRole] = useState('')
  const [company, setCompany] = useState('')

  const imgUrl = "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.webp";

  useEffect(() => {
    getUser(localStorage.getItem("ID")).then((res) => {
      setname(res.data.nombre)
      setSurname(res.data.apellido)
      setRole(res.data.rol)
      if(res.data.rol === "benefactor") {
        getBenefactor(localStorage.getItem("ID")).then((res) => {
          setCompany(res.data.benefactor.empresa)
        })
      }
    })
  },[])
  
  const navigate = useNavigate();

  const handlerLogout = () => {
    localStorage.clear()
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