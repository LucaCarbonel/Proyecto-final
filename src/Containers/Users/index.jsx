import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

import ModalAddTokens from "./../../Components/ModalAddTokens";
import loggedRoute from "./../../Hocs/loggedRoute"
import { USER } from "./../../Constants/mockedData";
import {ReactComponent as Plus} from './../../Assets/plus.svg';
import {ReactComponent as Back} from './../../Assets/back.svg';

import './index.scss';

const Users = () => {
  let navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false)
  const [nameModal, setNameModal] = useState('')
  const [surnameModal, setSurnameModal] = useState('')
  const [cuentaModal, setCuentaModal] = useState(null)
  let [showedUsers, setShowedUsers] = useState(USER)

  const handlerInput = (searchValue) => {
    showedUsers = [];
    if (searchValue.trim() !== '') {
      USER.forEach((user) => {
        if (user.email.includes(searchValue.trim())) {
          showedUsers.push(user)
        }
      })
      const modifyArray = [...showedUsers];
      setShowedUsers(modifyArray);
    } else {
      setShowedUsers(USER);
    }
  };

  const handlerAddTokens = (name, surname, cuenta) => {
    setNameModal(name);
    setSurnameModal(surname);
    setCuentaModal(cuenta)
    handlerModal();
  };

  const handlerModal = () => {
    setOpenModal(!openModal)
  };

  return (
    <>
      <div className="users__back" onClick={() => navigate(-1)}>
        <Back />
        Acreditar Tokens
      </div>
      <div className="users" >
        <input className="users__search" placeholder="Buscar por email"  onChange={(x) => handlerInput(x.target.value)} />
        {showedUsers.map(({ nombre, apellido, email, img_perfil, rol, cuenta}) => {
          if (rol === "generico") {
            return (
              <div className="users__user" key={email}>
                <img className="users__user-img" src={img_perfil} />
                <div className="users__user-name">{nombre}</div>
                <div className="users__user-surname">{apellido}</div>
                <div className="users__user-email">{email}</div>
                <div className="users__user-add" onClick={() => handlerAddTokens(nombre, apellido, cuenta)}><Plus /></div>
              </div>
            );
          } else {
            return (null);
          }
        })}
      </div>
      <ModalAddTokens open={openModal} close={handlerModal} name={nameModal} surname={surnameModal} cuenta={cuentaModal} setCuenta={setCuentaModal} />
    </>
  )
}

export default loggedRoute(Users);