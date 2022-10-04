import React, { useState, useEffect } from 'react';

import Modal from 'react-modal';

import TopBar from './../../Components/TopBar';

import {ReactComponent as Cross} from './../../Assets/cross-white.svg';
import {ReactComponent as Plus} from './../../Assets/plus-md.svg';
import {ReactComponent as Edit} from './../../Assets/edit.svg';

import './index.scss'

const Benefits = () => {
  const [open, setOpen] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [descripcionM, setDescripcionM] = useState(null);
  const [empresaM, setEmpresaM] = useState(null);
  const [imagenM, setImagenM] = useState(null);
  const [precioM, setPrecioM] = useState(null);
  const [image, setImage] = useState(null);
  const [imageView, setImageView] = useState(null);

  useEffect(() => {
    setImageView(image ? URL.createObjectURL(image) : null)
  },[image])

  const BENEFITS = JSON.parse(localStorage.getItem("beneficios"));
  const empresaUser = localStorage.getItem('empresa');
  const rol = localStorage.getItem('rol');

    const handleModal = (empresa, descripcion, imagen, precio) => {
      setDescripcionM(descripcion)
      setEmpresaM(empresa)
      setImagenM(imagen)
      setPrecioM(precio)
    }

    const handlerCreateBenefits = () => { 
      setOpenCreate(true);
    }
  
    return (
    <> 
      <TopBar/>
      <div className="benefits">
      { rol === 'beneficiario' ? (
            <div className="benefits__header">
              <div className="benefits__header-icon" onClick={handlerCreateBenefits}>
                <Plus />
              </div>
              <div className="benefits__header-icon">
                <Edit />
              </div>
            </div>
          ) : (null)
          }
        <div className="benefits__benefits">
          {BENEFITS.map(({empresa, descripcion, imagen, precio}) => (
              <img key={descripcion} src={imagen} className="benefits__image" onClick={() => [setOpen(!open), handleModal(empresa, descripcion, imagen, precio)]}/>
            )
          )}
        </div>
        <Modal 
          isOpen={openCreate}
          className="benefits__create"
          overlayClassName="benefits__modal-overlay"
        >
          <div className="benefits__create-img">
          { imageView ? 
            (<img
              src={imageView}
              className="benefits__image-view"
              alt="Foto de perfil"
            />)
            : (<div className="benefits__image-view" style={{paddingTop: "10px"}}>
              </div>)
          }
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
          <div className="benefits__create-decripcion">
          </div>
          <div className="benefits__create-precio">
          </div>
          <div className="benefits__create-buttons">
          </div>        
        </Modal>
        <Modal
          isOpen={open}
          className="benefits__modal"
          overlayClassName="benefits__modal-overlay"
        >
          <Cross className="benefits__modal-cross" onClick={() => setOpen(!open)}/>
          <img src={imagenM} className="benefits__modal-image" />
          <div className="benefits__modal-descripcion">{descripcionM} </div>
          <div className="benefits__modal-empresa">{empresaM}</div>
          <div className="benefits__modal-precio">${precioM}</div>
        </Modal>
      </div>
    </>
  )
}

export default Benefits;