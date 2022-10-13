import React, { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";

import ModalAddTokens from "./../../Components/ModalAddTokens";
import loggedRoute from "./../../Hocs/loggedRoute"
import { getDonors, getRecolector } from "./../../Api/index.js";
import {ReactComponent as Plus} from './../../Assets/plus.svg';
import {ReactComponent as Back} from './../../Assets/back.svg';

import './index.scss';

const Users = () => {
  let navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false)
  const [nameModal, setNameModal] = useState('')
  const [surnameModal, setSurnameModal] = useState('')
  const [idUser, setIdUser] = useState(null)
  let [showedUsers, setShowedUsers] = useState([])
  const [donors, setDonors] = useState([])
  const [recolector, setRecolector] = useState([])


  useEffect(() => {
    getDonors().then((response) => {
      setDonors(response.data)
    })
    getRecolector(localStorage.getItem("ID")).then((response) => {
      setRecolector(response.data)
      console.log(response.data.recolector.lugarRecoleccion)
    })
  },[])

  const handlerInput = (searchValue) => {
    showedUsers = [];
    if (searchValue.trim() !== '') {
      donors.forEach((user) => {
        if (user.email.includes(searchValue.trim())) {
          showedUsers.push(user)
        }
      })
      const modifyArray = [...showedUsers];
      setShowedUsers(modifyArray);
    } else {
      setShowedUsers(donors);
    }
  };

  const handlerAddTokens = (name, surname, ID) => {
    setNameModal(name);
    setSurnameModal(surname);
    setIdUser(ID)
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
        {donors.map(({ nombre, apellido, email, img_perfil, ID}) => {
          return (
            <div className="users__user" key={email}>
              <img className="users__user-img" src={img_perfil} />
              <div className="users__user-name">{nombre}</div>
              <div className="users__user-surname">{apellido}</div>
              <div className="users__user-email">{email}</div>
              <div className="users__user-add" onClick={() => handlerAddTokens(nombre, apellido, ID, recolector)}><Plus /></div>
            </div>
          );
        })}
      </div>
      <ModalAddTokens open={openModal} close={handlerModal} name={nameModal} surname={surnameModal} idUser={idUser} recolector={recolector}/>
    </>
  )
}

export default loggedRoute(Users);