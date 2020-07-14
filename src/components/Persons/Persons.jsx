import React, { useEffect, useState } from 'react';
import './Persons.scss';
import PropTypes from 'prop-types';
import { Person } from './Person';
import { usersPropTypes } from '../../propTypesConstant';

export const Persons = ({ users, getUsers, isLastPage }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getUsers(page);
    setPage(page + 1);
  }, []);

  const handleUsersLoad = () => {
    setPage(page + 1);
    getUsers(page);
  };

  return (
    <section className="persons">
      <h2 className="persons__heading">
    Our cheerful users
      </h2>
      <p className="persons__underHeading">
        Attention! Sorting users by registration date
      </p>
      <ul className="persons__list">
        { users.map(user => (
          <li className="persons__item person" key={user.id}>
            <Person user={user} />
          </li>
        ))}
      </ul>
      {!isLastPage ? (
        <div className="persons__button">
          <button
            type="button"
            className="persons__button"
            onClick={() => handleUsersLoad()}
          >
        Show more
          </button>
        </div>
      )
        : <h3 className="persons__warning">You have opened all users!</h3>}

    </section>
  );
};

Persons.propTypes = {
  users: usersPropTypes.isRequired,
  getUsers: PropTypes.func.isRequired,
  isLastPage: PropTypes.bool.isRequired,
};
