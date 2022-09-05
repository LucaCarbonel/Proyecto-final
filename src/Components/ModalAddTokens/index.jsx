import React, { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import {ReactComponent as Cross} from './../../Assets/cross-black.svg';
import {ReactComponent as Dolar} from './../../Assets/dolar.svg';

import './index.scss';

const ModalAddTokens = ({open, close, name, surname, cuenta, setCuenta}) => {
  const [tokens, setTokens] = useState(1);

  const handlerPay = (tokens) => {
    setCuenta(cuenta + tokens)
    setTokens(1)
    console.log(tokens)
    console.log(cuenta)
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
          Valor : 
          <input className="add-tokens-modal__value-input" type="number" min="1" value={tokens} onChange={(x) => setTokens(x.target.value)} />
        </div>
        <Dolar className="add-tokens-modal__value-dolar" />
      </div>
      <div className="add-tokens-modal__line" />
      <div className="add-tokens-modal__buttons">
        <button className="add-tokens-modal__buttons-ok" onClick={() => [handlerPay(tokens), close()]}>
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
}

export default ModalAddTokens;