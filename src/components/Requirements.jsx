import React from 'react';
import './Requirements.scss';
import contentImage from '../assets/image/man-laptop-v1.svg';

export const Requirements = () => (
  <section className="requirements">
    <h2 className="requirements__heading">Let&apos;s get acquainted</h2>
    <div className="requirements__content">
      <div className="requirements__image">
        <img
          src={contentImage}
          className="requirements__image"
          alt="requirements content man and laptop"
        />
      </div>
      <div className="requirements__info">
        <h3 className="requirements__info-title">
          I am cool frontend developer
        </h3>
        <p className="requirements__info-text">
           We will evaluate how clean your approach to writing CSS and
           Javascript code is. You can use any CSS and Javascript 3rd party
           libraries without any restriction.
        </p>
        <p className="requirements__info-text">
          If 3rd party css/javascript libraries are added to the project via
          bower/npm/yarn you will get bonus points. If you use any task runner
          (gulp/webpack) you will get bonus points as well. Slice service
          directory page PSD mockup into HTML5/CSS3.
        </p>
        <a href="#?" className="requirements__link">
          Sing up now
        </a>
      </div>
    </div>

  </section>
);
