import React from 'react';
import './Persons.scss';

export const Persons = ({users, getUsers}) => (
  <section className="persons">
    <h2 className="persons__heading">
  Our cheerful users
    </h2>
    <p className="persons__underHeading">
      Attention! Sorting users by registration date
    </p>
    <ul className="persons__list">
      {users.map(user => (
        <li className="persons__item" key={user.id}>{user.name}</li>
      ))}
    </ul>
    <button
      type="button"
      onClick={() => getUsers(1)}
    >
      get users
    </button>
  </section>
);
