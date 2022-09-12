import React, {useState} from 'react';

import Modal from 'react-modal';

import TopBar from './../../Components/TopBar';

import {ReactComponent as Cross} from './../../Assets/cross.svg';

import { BENEFITS } from './../../Constants/mockedData'

import './index.scss'

const Benefits = () => {
  const [open, setOpen] = useState(false)
  const [descripcionM, setDescripcionM] = useState(null)
  const [empresaM, setEmpresaM] = useState(null)
  const [imagenM, setImagenM] = useState(null)
  const [precioM, setPrecioM] = useState(null)

    const handleModal = (empresa, descripcion, imagen, precio) => {
      setDescripcionM(descripcion)
      setEmpresaM(empresa)
      setImagenM(imagen)
      setPrecioM(precio)
      console.log(precio)
    }
    return (
    <> 
      <TopBar/>
      <div className="benefits">
      {BENEFITS.map(({empresa, descripcion, imagen, precio}) => {
        console.log(imagen)
        return(
          <>
          <img src={imagen} className="benefits__image" onClick={() => [setOpen(!open), handleModal(empresa, descripcion, imagen, precio)]}/>
          </>
          )
      })}
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