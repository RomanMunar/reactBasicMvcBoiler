import React from "react";
import PropTypes from 'prop-types'
import classnames from 'classnames'
const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  errors
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        name={name}
        id="name"
        className={classnames('form-control from-control-lg',{ 'is-invalid': errors })}
      />
      {errors && <div className="is-invalid">{errors}</div>}
    </div>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  errors: PropTypes.string
}

TextInputGroup.defaultProps = {
  type: 'text'
}

export default TextInputGroup;
