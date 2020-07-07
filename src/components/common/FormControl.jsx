import React from 'react';

export const Input = ({ input, meta, ...props }) => (
  <div>
    <input {...input} {...props} className="form-control" />
  </div>
);
