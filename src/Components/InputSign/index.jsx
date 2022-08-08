import React from 'react';
import './index.scss';

const InputSign = ({value, onChange, placeholder, Icon, isRequired, type}) => {
  return (
    <>
      <div className={}>
        <input 
          className={input}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          type={type}
        />
        <Icon className={input_icon}/>
        {isRequired ? <div classname={input__asterisk}>*</div> : null}
      </div>
    </>
  )
};

export default InputSign;