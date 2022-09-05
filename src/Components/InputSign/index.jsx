import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const InputSign = ({value, placeholder, Icon, isRequired, type, setValue}) => {
  return (
    <div className='inputBox'>
      {isRequired && <div className="inputBox__asterisk">*</div>}
      <input 
        className={isRequired ? 'inputBox__input' : 'inputBox__input2'}
        onChange={(x) => setValue(x.target.value)}
        value={value}
        placeholder={placeholder}
        type={type}
      />
      <Icon className='inputBox__icon'/>
    </div>
  )
};

InputSign.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  Icon: PropTypes.oneOf(['img', 'svg']).isRequired,
  isRequired: PropTypes.bool.isRequired,
  type: PropTypes.string,
  setValue: PropTypes.func.isRequired,
}

InputSign.defaultProps  = {
  type: ''
}

export default InputSign;