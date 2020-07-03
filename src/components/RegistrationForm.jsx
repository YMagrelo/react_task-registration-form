import React from 'react';
import './RegistrationForm.scss';

export const RegistrationForm = () => (
  <section className="registration">
    <h2 className="registration__heading">
  Register to get a work
    </h2>
    <p className="registration__underHeading">
      Attention! After successful registration and alert,
      update the list of users in the block from the top
    </p>
    <form action="POST" className="registration__form form">
      <label htmlFor="name" className="form__label">
        Name
      </label>
      <div>
        <input
          type="text"
          className="form__inputName"
          id="name"
          placeholder="Your name"
        />
      </div>

      <label htmlFor="email" className="form__label">
        Email
      </label>
      <div>
        <input
          type="email"
          className="form__inputEmail"
          id="name"
          placeholder="Your email"
        />
      </div>

      <label htmlFor="phone" className="form__label">
        Phone number
      </label>
      <div>
        <input
          type="number"
          className="form__inputPhone"
          id="phone"
          placeholder="+380 XX XXX XX XX"
        />
      </div>
        Enter phone number in open format

    </form>
  </section>
);
