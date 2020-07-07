import React from 'react';
import classNames from 'classnames';

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.error && meta.touched;

  return (
    <div>
      <input
        {...input}
        {...props}
        className={classNames('form-control', { 'is-invalid': hasError })}
      />
      {hasError && meta.error}
    </div>
  );
};
