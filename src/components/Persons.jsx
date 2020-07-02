import React from 'react';
import './Persons.scss';

export const Persons = () => (
  <section className="persons">
    <h2 className="persons__heading">
  Our cheerful users
    </h2>
    <p className="persons__underHeading">
      Attention! Sorting users by registration date
    </p>
    <ul className="persons__list">
      <li className="persons__item">1</li>
      <li className="persons__item">2</li>
      <li className="persons__item">3</li>
      <li className="persons__item">4</li>
      <li className="persons__item">5</li>
      <li className="persons__item">6</li>
    </ul>
  </section>
);
