import React from 'react';
import './index.scss';

const InputSign = ({value, onChange, placeholder, Icon, isRequired, type}) => {
  return (
    <div className='inputBox'>
      {isRequired && <div className="inputBox__asterisk">*</div>}
      <input 
        className={isRequired ? 'inputBox__input' : 'inputBox__input2'}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
      />
      <Icon className='inputBox__icon'/>
    </div>
  )
};

export default InputSign;