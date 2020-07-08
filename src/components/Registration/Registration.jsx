import React, { useEffect } from 'react';
import './Registration.scss';
import RegistrationForm from './RegistrationForm';

export const Registration = ({ getPositions, positions, registration }) => {
  useEffect(() => {
    getPositions();
  }, []);

  const onSubmit = (formData) => {
    console.log(formData);
    registration(
      formData.name, formData.email, formData.phone, formData.positionId,
    );
  };

  return (
    <section className="registration">
      <h2 className="registration__heading">
    Register to get a work
      </h2>
      <p className="registration__underHeading">
        Attention! After successful registration and alert,
        update the list of users in the block from the top
      </p>
      <RegistrationForm
        onSubmit={onSubmit}
        positions={positions}
      />
    </section>
  );
};
