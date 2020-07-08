import React from 'react';
import './RegistrationForm.scss';
import { reduxForm, Field } from 'redux-form';
import {
  required,
  minLength2,
  maxLength60,
  maxLength100,
  email,
  phoneNumber,
} from '../../utils/validators';
import { Input } from '../common/FormControl';

const RegistrationForm = (props) => {
  const { handleSubmit, positions } = props;

  return (
    <form onSubmit={handleSubmit} className="registration__form form">
      <label htmlFor="name" className="form__label">
          Name
      </label>
      <div className="form__inputName">
        <Field
          name="name"
          component={Input}
          type="text"
          id="name"
          placeholder="Your name"
          validate={[required, minLength2, maxLength60]}
        />
      </div>
      <label htmlFor="email" className="form__label">
          Email
      </label>
      <div className="form__inputEmail">
        <Field
          name="email"
          component={Input}
          type="email"
          id="name"
          placeholder="Your email"
          validate={[required, minLength2, maxLength100, email]}
        />
      </div>

      <label htmlFor="phone" className="form__label">
          Phone number
      </label>
      <div className="form__inputPhone">
        <Field
          name="phone"
          component={Input}
          type="text"
          id="phone"
          placeholder="+380 XX XXX XX XX"
          validate={[required, phoneNumber]}
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
                  name="positionId"
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
        <input
          className="form__fileInput form-control-file"
          type="file"
          id="photo"
          placeholder="Upload your photo"
        />
      </div>
      <button className="form__button" type="submit">Sing up now</button>
    </form>
  );
};

export default reduxForm({ form: 'registration' })(RegistrationForm);
