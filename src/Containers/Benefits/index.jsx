import React, { useState, useEffect } from 'react';

import Modal from 'react-modal';

import TopBar from './../../Components/TopBar';

import {ReactComponent as Cross} from './../../Assets/cross-white.svg';
import {ReactComponent as Plus} from './../../Assets/plus-md.svg';
import {ReactComponent as Picture} from './../../Assets/picture.svg';
import {ReactComponent as Eye} from './../../Assets/eye.svg';

import './index.scss'

const Benefits = () => {
  const [open, setOpen] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [descripcionM, setDescripcionM] = useState(null);
  const [descripcionC, setDescripcionC] = useState(null);
  const [empresaM, setEmpresaM] = useState(null);
  const [imagenM, setImagenM] = useState(null);
  const [precioM, setPrecioM] = useState(null);
  const [precioC, setPrecioC] = useState(null);
  const [image, setImage] = useState(null);
  const [imageView, setImageView] = useState(null);
  const [ableCreate, setAbleCreate] = useState(false)
  const [error, setError] = useState('')


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
      setOpen(!open)
    }

    const handlerCreateBenefits = () => { 
      setOpenCreate(true);
      setImage(null)
      setDescripcionC(null)
      setPrecioC(null)
    }

    const handlerPostBenefit = (empresa, descripcion, imagen, precio) => {
    if (ableCreate) {
      BENEFITS.push({
        descripcion,
        empresa,
        imagen,
        precio,
      })
      localStorage.setItem("beneficios", JSON.stringify(BENEFITS));
      setOpenCreate(!openCreate)
    } else {
      setError('Todos los campos deben estar completos para poder crear un beneficio')
    }
    }

    useEffect(() => {   
      setError('')
     if (image && descripcionC && precioC) {
        setAbleCreate(true)
      } else  {
        setAbleCreate(false)
      }
    },[image, descripcionC, precioC]);

    return (
    <> 
      <TopBar/>
      <div className="benefits">
      { rol === 'beneficiario' ? (
            <div className="benefits__header">
              <div className="benefits__header-icon" onClick={handlerCreateBenefits}>
                <Plus />
              </div>
            </div>
          ) : (null)
          }
        <div className="benefits__benefits">
          {BENEFITS.map(({empresa, descripcion, imagen, precio}) => (
              <img key={descripcion} src={imagen} className="benefits__image" onClick={() => handleModal(empresa, descripcion, imagen, precio)}/>
            )
          )}
        </div>
        <Modal 
          isOpen={openCreate}
          className="benefits__create"
          overlayClassName="benefits__modal-overlay"
        >
          <Cross className="benefits__modal-cross" onClick={() => setOpenCreate(!openCreate)}/>
          <div className="benefits__create-flex">
            <div className="benefits__create-img">
              <div className="benefits__create-text">
                Imagen Promocional
              </div>
              { imageView ? 
                (<img
                  src={imageView}
                  className="benefits__create-image-view"
                  alt="Foto de perfil"
                />)
                : (<div className="benefits__create-image-view" style={{paddingTop: "10px"}}>
                  <Picture />
                  </div>)
              }
              <label
                className="benefits__create-image-add"
                htmlFor="upload"    
                style={{zIndex:2}}      
              >
                <div className="benefits__create-image-label">
                  <Plus />
                </div>
              </label>
              <input
                id="upload"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                style={{display:'none'}}
              />
            </div>
            <div className="benefits__create-flex-column">
              <div className="benefits__create-description">
                <div className="benefits__create-text">
                  Descripcion del beneficio
                </div>
                <textarea
                  value={descripcionC}
                  onChange={(x => setDescripcionC(x.target.value))}
                  className="benefits__create-description-textarea"
                  placeholder="Descripcion del beneficio"
                />
              </div>
              <div className="benefits__create-valor">
                <div className="benefits__create-text">
                  Valor en tokens:
                </div>
                <input
                  type="number"
                  className="benefits__create-valor-input"
                  value={precioC}
                  onChange={(x => setPrecioC(x.target.value))}
                  min="1"
                />
              </div>
            </div>
          </div>
          <div className="benefits__create-error">
              {error}
          </div>
          <div className="benefits__create-buttons">
            <button
              className="benefits__create-buttons-ok"
              onClick={() => handlerPostBenefit(empresaUser, descripcionC, imageView, precioC)}
            >
              Crear
            </button>
            <button 
              className="benefits__create-buttons-cancel"
              onClick={() => setOpenCreate(!openCreate)}
            >
              Cancelar
            </button>
          </div>
          <div
            className="benefits__create-preview"
          >
            { ableCreate ? (
              <div
                className="benefits__create-preview-able"
                onClick={() => handleModal(empresaUser, descripcionC, imageView, precioC)}
              >
                <Eye />
              </div>
            ) : (
              <div
                className="benefits__create-preview-disable" 
                onClick={() => setError('Todos los campos deben estar completos para ver una vista previa')}
              >
                <Eye />
              </div>
            )}
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