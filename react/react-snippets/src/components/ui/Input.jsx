import React from 'react';
import './Input.css';

const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled = false,
  error = false,
  label,
  helperText,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}) => {
  const inputClasses = [
    'input',
    error ? 'input-error' : '',
    disabled ? 'input-disabled' : '',
    leftIcon ? 'input-with-left-icon' : '',
    rightIcon ? 'input-with-right-icon' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="input-container">
      {label && (
        <label className="input-label">
          {label}
        </label>
      )}
      <div className="input-wrapper">
        {leftIcon && (
          <div className="input-icon input-icon-left">
            {leftIcon}
          </div>
        )}
        <input
          type={type}
          className={inputClasses}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
        {rightIcon && (
          <div className="input-icon input-icon-right">
            {rightIcon}
          </div>
        )}
      </div>
      {helperText && (
        <span className={`input-helper ${error ? 'input-helper-error' : ''}`}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Input;
