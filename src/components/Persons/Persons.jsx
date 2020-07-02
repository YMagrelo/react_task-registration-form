import React, { useEffect } from 'react';
import './Persons.scss';
import { Person } from './Person';

export const Persons = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers(1);
  }, []);

  return (
    <section className="persons">
      <h2 className="persons__heading">
    Our cheerful users
      </h2>
      <p className="persons__underHeading">
        Attention! Sorting users by registration date
      </p>
      <ul className="persons__list">
        {users.map(user => (
          <li className="persons__item person" key={user.id}>
            <Person user={user} />
          </li>
        ))}
      </ul>
      <div className="persons__button">
        <button
          type="button"
          className="persons__button"
        // onClick={() => getUsers(1)}
        >
        Show more
        </button>
      </div>

    </section>
  );
};
