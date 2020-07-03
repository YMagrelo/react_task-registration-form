import React from 'react';
import './Registration.scss';
import { RegistrationForm } from './RegistrationForm';

export const Registration = () => (
  <section className="registration">
    <h2 className="registration__heading">
  Register to get a work
    </h2>
    <p className="registration__underHeading">
      Attention! After successful registration and alert,
      update the list of users in the block from the top
    </p>
    <RegistrationForm />
  </section>
);
