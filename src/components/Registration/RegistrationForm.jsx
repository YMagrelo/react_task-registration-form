import React from 'react';
import './RegistrationForm.scss';

export const RegistrationForm = () => (
  <form action="POST" className="registration__form form">
    <label htmlFor="name" className="form__label">
        Name
    </label>
    <div>
      <input
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
      <input
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
      <input
        type="tel"
        className="form__inputPhone input"
        id="phone"
        placeholder="+380 XX XXX XX XX"
      />
      <span className="form__phonePrompt">
          Enter phone number in open format
      </span>
    </div>
    <label htmlFor="photo" className="form__label">
        Photo
    </label>
    <div className="file has-name is-right form__photo">
      <label className="file-label">
        <input
          className="file-input"
          type="file"
          name="photo"
          id="photo"
          placeholder="Upload your photo"
        />
        <span className="file-cta">
          <span className="file-label">
        Browse
          </span>
        </span>
        <span className="file-name form__file-name">
      Upload your photo
        </span>
      </label>
    </div>
    <button className="form__button" type="button">Sing up now</button>
  </form>
);
