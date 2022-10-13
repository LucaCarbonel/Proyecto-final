import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import {format, endOfDay} from 'date-fns'

import {ReactComponent as Cross} from './../../Assets/cross-black.svg';
import {ReactComponent as Dolar} from './../../Assets/dolar.svg';
import { postDonation } from "./../../Api/index.js";

import './index.scss';

const ModalAddTokens = ({open, close, name, surname, recolector, idUser}) => {
  const [peso, setPeso] = useState(1);
  const handlerPay = (gramos) => {
    postDonation(
      idUser,
      "plastico",
      gramos,
      Math.round(gramos/10),
      format(endOfDay(new Date()), 'MM dd yyyy'),
      recolector.recolector.lugarRecoleccion,
    )
  }

  return (
    <Modal
      isOpen={open}
      className="add-tokens-modal"
      overlayClassName="add-tokens-modal__overlay"
    >
      <div className="add-tokens-modal__header">
        <div className="add-tokens-modal__header-name">
            Dando Tokens a <div className="add-tokens-modal__header-bold">{name} {surname}</div>
        </div>
        <Cross className="add-tokens-modal__header-cross" onClick={close}/>
      </div>
      <div className="add-tokens-modal__line" />
      <div className="add-tokens-modal__box">
        <div className="add-tokens-modal__value">
          Peso en g : 
          <input className="add-tokens-modal__value-input" type="number" min="1" value={peso} onChange={(x) => setPeso(x.target.value)} />
        </div>
        <Dolar className="add-tokens-modal__value-dolar" />
      </div>
      <div className="add-tokens-modal__line" />
      <div className="add-tokens-modal__buttons">
        <button className="add-tokens-modal__buttons-ok" onClick={() => [handlerPay(peso), close()]}>
          Acreditar
        </button>
        <button className="add-tokens-modal__buttons-cancel" onClick={close}>
          Cancelar
        </button>
      </div>
   </Modal>
  );
}

ModalAddTokens.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  cuenta: PropTypes.number.isRrquired,
  setCuenta:PropTypes.func.isRequired,
  recolector: PropTypes.object.isRequired,
  idUser: PropTypes.number.isRequired,
}

export default ModalAddTokens;