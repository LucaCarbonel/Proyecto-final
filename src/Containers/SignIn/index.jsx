import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

import Input from "./../../Components/InputSign"
import unloggedRoute from "./../../Hocs/unloggedRoute"
import { ROUTES } from './../../Constants/ROUTES';
import { USER } from './../../Constants/mockedData'

import {ReactComponent as Password} from './../../Assets/password.svg';
import {ReactComponent as At} from './../../Assets/at.svg';
import {ReactComponent as Back} from './../../Assets/back.svg';


import './index.scss';

const SignIn = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlerSignIn = () => {
    if (email && password) {
      USER.forEach((USER) => {
        if (email.toLowerCase() === USER.email.toLowerCase() && password === USER.password){
          navigate(ROUTES.home);
          localStorage.setItem('nombre', USER.nombre);
          localStorage.setItem('apellido', USER.apellido);
          localStorage.setItem('email', USER.email);
          localStorage.setItem('empresa', USER.empresa);
          localStorage.setItem('password', USER.password);
          localStorage.setItem('imgUrl', USER.img_perfil);
          localStorage.setItem('accessToken', 'dastffasdtygujfdu8y78672js671lkd8y7apd7dgbsi9ayhsbndsg');
          } else {
            setError('El email o la contraseña son incorrectos')
          }
      })
    } else {
      setError('Se deben completar todos los campos')
    }
  }

  return (
    <div className="signIn">
      <div className="signIn__back" onClick={() => navigate(-1)}>
        <Back />
        Inicio de sesion
      </div>
      <div className="signIn__form">
        <Input
          Icon={At}
          isRequired={false}
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <Input
          Icon={Password}
          isRequired={false}
          placeholder="Contraseña"
          value={password}
          setValue={setPassword}
          type="password"
        />
      </div>
      {error && <div className="signIn__error">{error}</div>}
      <div className="signIn__recovery" onClick={() => navigate(ROUTES.signup)}>
        Olvidaste tu contraseña?
      </div>
      <div className="signIn__button-box">
        <button className="signIn__button" onClick={() => handlerSignIn()}>
            Iniciar sesion
        </button>
      </div>
      <div className="signIn__redirect" onClick={() => navigate(ROUTES.signup)}>
        No tienes un usuario?
        <span style={{textDecoration: "underline"}}>Registrarse</span>
      </div>
    </div>
  )
}

export default unloggedRoute(SignIn);