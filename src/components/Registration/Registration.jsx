import React, { useEffect } from 'react';
import './Registration.scss';
import PropTypes from 'prop-types';
import RegistrationForm from './RegistrationForm';
import { positionsPropTypes } from '../../propTypesConstant';

export const Registration = ({
  getPositions,
  positions,
  getRegistrationData,
}) => {
  useEffect(() => {
    getPositions();
  }, []);

  const onSubmit = (formData) => {
    getRegistrationData(
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

Registration.propTypes = {
  getPositions: PropTypes.func.isRequired,
  positions: positionsPropTypes.isRequired,
  getRegistrationData: PropTypes.func.isRequired,
};
