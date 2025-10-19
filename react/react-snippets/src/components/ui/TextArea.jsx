import React from 'react';
import './TextArea.css';

const TextArea = ({
  value,
  onChange,
  placeholder,
  disabled = false,
  error = false,
  label,
  helperText,
  rows = 4,
  resize = 'vertical',
  className = '',
  ...props
}) => {
  const textAreaClasses = [
    'textarea',
    error ? 'textarea-error' : '',
    disabled ? 'textarea-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="textarea-container">
      {label && (
        <label className="textarea-label">
          {label}
        </label>
      )}
      <textarea
        className={textAreaClasses}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        style={{ resize }}
        {...props}
      />
      {helperText && (
        <span className={`textarea-helper ${error ? 'textarea-helper-error' : ''}`}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export default TextArea;
