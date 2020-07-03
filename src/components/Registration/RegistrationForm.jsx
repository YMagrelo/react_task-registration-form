import React, { useState } from 'react';
import './RegistrationForm.scss';
import 'bulma/css/bulma.css';
import { reduxForm, Field } from 'redux-form';

const RegistrationForm = (props) => {
  const { handleSubmit, positions } = props;

  return (
    <form onSubmit={handleSubmit} className="registration__form form">
      <label htmlFor="name" className="form__label">
          Name
      </label>
      <div>
        <Field
          name="name"
          component="input"
          type="text"
          className="form__inputName input"
          id="name"
          placeholder="Your name"
        />
      </div>

      <label htmlFor="email" className="form__label">
          Email
      </label>
      <div>
        <Field
          name="email"
          component="input"
          type="email"
          className="form__inputEmail input"
          id="name"
          placeholder="Your email"
        />
      </div>

      <label htmlFor="phone" className="form__label">
          Phone number
      </label>
      <div>
        <Field
          name="phone"
          component="input"
          type="text"
          className="form__inputPhone input"
          id="phone"
          placeholder="+380 XX XXX XX XX"
        />
        <span className="form__phonePrompt">
            Enter phone number in open format
        </span>
      </div>
      <div className="form__radio radio">
        <label
          className="radio__title"
          htmlFor="position"
        >
Select your position
        </label>
        <div className="radio__item">
          {positions.map((position, index) => (
            <div key={position.id}>
              <label htmlFor={position.name}>
                <Field
                  checked
                  name="position_id"
                  component="input"
                  type="radio"
                  value={position.id}
                  id={position.name}
                />
                <span>{position.name}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <label htmlFor="photo" className="form__label">
          Photo
      </label>
      <div>
        <Field
          component="input"
          className="form__fileInput"
          type="file"
          name="photo"
          id="photo"
          placeholder="Upload your photo"
        />
      </div>
      <button className="form__button" type="submit">Sing up now</button>
    </form>
  );
};

export default reduxForm({ form: 'registration' })(RegistrationForm);