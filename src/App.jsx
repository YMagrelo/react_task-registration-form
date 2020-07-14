import React, { useState } from 'react';
import './App.scss';
import './resets.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Header } from './components/Header/Header';
import { About } from './components/About';
import { Requirements } from './components/Requirements';
import { Persons } from './components/Persons/Persons';
import {
  getUsersThunk,
  getPositionsThunk,
  registrationThunk,
} from './redux/reducer';
import { Registration } from './components/Registration/Registration';
import { Footer } from './components/Footer';
import { usersPropTypes, positionsPropTypes } from './propTypesConstant';

const App = (props) => {
  const {
    users,
    getUsers,
    isLastPage,
    getPositions,
    positions,
    getRegistrationData,
  } = props;

  const [open, setOpen] = useState(false);

  return (
    <div
      className={classNames('app-wrapper', { show: open })}
    >
      <Header
        open={open}
        setOpen={setOpen}
      />
      <About />
      <Requirements />
      <Persons
        users={users}
        getUsers={getUsers}
        isLastPage={isLastPage}
      />
      <Registration
        getPositions={getPositions}
        positions={positions}
        getRegistrationData={getRegistrationData}
      />
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.reducer.users,
  isLastPage: state.reducer.isLastPage,
  positions: state.reducer.positions,
});

const mapDispatchToProps = dispatch => ({
  getUsers: page => dispatch(getUsersThunk(page)),
  getPositions: () => dispatch(getPositionsThunk()),
  getRegistrationData:
  (name, email, phone, positionId) => dispatch(
    registrationThunk(name, email, phone, positionId),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  users: usersPropTypes.isRequired,
  getUsers: PropTypes.func.isRequired,
  isLastPage: PropTypes.bool.isRequired,
  getPositions: PropTypes.func.isRequired,
  positions: positionsPropTypes.isRequired,
  getRegistrationData: PropTypes.func.isRequired,
};
