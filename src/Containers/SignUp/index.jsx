import React, {useState, useEffect} from 'react';
import './index.scss';
import Input from "./../../Components/InputSign"
import {ReactComponent as Avatar} from './../../Assets/avatar.svg';
import {ReactComponent as Password} from './../../Assets/password.svg';
import {ReactComponent as At} from './../../Assets/at.svg';
import {ReactComponent as Building} from './../../Assets/building.svg';
import {ReactComponent as Back} from './../../Assets/back.svg';
import {ReactComponent as Empty} from './../../Assets/empty.svg'
import {ReactComponent as Plus} from './../../Assets/plus.svg';

const SignUp = () => {
  const [image, setImage] = useState(null);
  const [imageView, setImageView] = useState(null);

  useEffect(() => {
    setImageView(image ? URL.createObjectURL(image) : null)
  },[image])

    return (
    <div className="signUp">
      <div className="signUp__back">
        <Back />
        Registro
      </div>
      <div className="signUp__form">
        <Input
          Icon={Avatar}
          isRequired={true}
          placeholder="Nombre"
        />
        <Input
          Icon={Avatar}
          isRequired={true}
          placeholder="Apellido"
        />
        <Input
          Icon={At}
          isRequired={true}
          placeholder="Email"
        />
        <Input
          Icon={Building}
          isRequired={false}
          placeholder="Empresa"
        />
        <Input
          Icon={Password}
          isRequired={true}
          placeholder="Contraseña"
        />
        <Input
          Icon={Password}
          isRequired={true}
          placeholder="ConfirmarContraseña"
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
          <div className="signUp__image-add">
            <label
              for="files"               
            ><Plus /></label>
            <input 
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              // style={{visibility:'hidden'}}
              className="signUp__image-input"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;