import React, {useState, useEffect} from 'react';

import { useNavigate } from "react-router-dom";

import Input from "./../../Components/InputSign"
import unloggedRoute from "./../../Hocs/unloggedRoute"

import { ROUTES } from './../../Constants/ROUTES';

import {ReactComponent as Avatar} from './../../Assets/avatar.svg';
import {ReactComponent as Password} from './../../Assets/password.svg';
import {ReactComponent as At} from './../../Assets/at.svg';
import {ReactComponent as Building} from './../../Assets/building.svg';
import {ReactComponent as Back} from './../../Assets/back.svg';
import {ReactComponent as Empty} from './../../Assets/empty.svg'
import {ReactComponent as Plus} from './../../Assets/plus.svg';

import './index.scss';

const SignUp = () => {
  let navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [imageView, setImageView] = useState(null);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setImageView(image ? URL.createObjectURL(image) : null)
  },[image])

  const handlerSignUp = () => {
    if (name && surname && email && password && confirmPassword) {
      if(password.length < 8 && confirmPassword.length < 8 ) {
        setError('La contraseña debe de tener almenos 8 caracteres')
        } else {
          if(password !== confirmPassword){
            setError('Las contraseñas no son iguales')
          } else {
            if ((email.search('@') === -1 && email.search('.') === -1) || email.search('@') < email.search('.')) {
              setError('El email no es valido')
            } else {
              localStorage.setItem('nombre', name);
              localStorage.setItem('apellido', surname);
              localStorage.setItem('email', email);
              localStorage.setItem('empresa', company);
              localStorage.setItem('password', password);
              localStorage.setItem('imgUrl', imageView);
              localStorage.setItem('accessToken', 'jijihufffgfg');
              localStorage.setItem('rol', 'generico');
              navigate(ROUTES.home)
            }
          }
        }
    } else {
      setError('Se deben completar todos los campos obligatorios')
    }
  }

    return (
    <div className="signUp">
      <div className="signUp__back" onClick={() => navigate(-1)}>
        <Back />
        Registro
      </div>``
      <div className="signUp__content">
        <div className="signUp__form">
          <Input
            Icon={Avatar}
            isRequired={true}
            placeholder="Nombre"
            value={name}
            setValue={setName}
          />
          <Input
            Icon={Avatar}
            isRequired={true}
            placeholder="Apellido"
            value={surname}
            setValue={setSurname}
          />
          <Input
            Icon={At}
            isRequired={true}
            placeholder="Email"
            value={email}
            setValue={setEmail}
          />
          <Input
            Icon={Building}
            isRequired={false}
            placeholder="Empresa"
            value={company}
            setValue={setCompany}
          />
          <Input
            Icon={Password}
            isRequired={true}
            placeholder="Contraseña"
            value={password}
            setValue={setPassword}
            type="password"
          />
          <Input
            Icon={Password}
            isRequired={true}
            placeholder="ConfirmarContraseña"
            value={confirmPassword}
            setValue={setConfirmPassword}
            type="password"
          />
        </div>
        <div className="signUp__box">
          <div className="signUp__image">
            { imageView ? 
              (<img
                src={imageView}
                className="signUp__image-view"
                alt="Foto de perfil"
              />)
              : (<div className="signUp__image-view" style={{paddingTop: "10px"}}>
                  <Empty className="signUp__image-empty"/>
                </div>)
            }
            <div>
              <label
                className="signUp__image-add"
                htmlFor="upload"    
                style={{zIndex:2}}      
              >
                <div className="signUp__image-label">
                  <Plus style={{position:'absolute'}}/>
                </div>
                </label>
              <input
                id="upload"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                style={{display:'none'}}
                className="signUp__image-input"
              />
            </div>
          </div>
        </div>
      </div>
      {error && <div className="signUp__error">{error}</div>}
      <div className="signUp__button-box">
        <button className="signUp__button" onClick={() => handlerSignUp()}>
            Crear usuario
        </button>
      </div>
      <div className="signUp__redirect" onClick={() => navigate(ROUTES.signin)}>
        Ya tienes un usuario?
        <span style={{textDecoration: "underline"}}>Iniciar sesion</span>
      </div>
    </div>
  )
}

export default unloggedRoute(SignUp);