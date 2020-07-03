import React from 'react';
import './Person.scss';

export const Person = (props) => {
  const { photo, name, position, email, phone, id } = props.user;

  return (
    <>
      <img src={photo} alt="person" className="person__photo" />
      <h3 className="person__name">{name}</h3>
      <p className="person__position">{position}</p>
      <p className="person__email">{email}</p>
      <p className="person__phone">{phone}-{id}</p>
    </>
  );
};
