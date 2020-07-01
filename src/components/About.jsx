import React from 'react';
import './About.scss';

export const About = () => (
  <section className="about">
    <div className="about__content content">
      <h1 className="content__heading">
        Test assignment for frontend developer position
      </h1>
      <p className="content__text">
        We kindly remind you that your test assignment should
        be submitted as a link to github/bitbucket repository.
        <div className="content__text content__text--whole">
        Please be patient, we consider and respond to every
        application that meets minimum requirements. We look
        forward to your submission. Good luck! The photo has to
        scale in the banner area on the different screens
        </div>
      </p>
      <button className="content__button" type="button">Sing up now</button>
    </div>
  </section>
);
