import React, { useState } from 'react';
import './App.scss';
import './resets.scss';
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

const App = (props) => {
  const {
    users,
    getUsers,
    isLastPage,
    getPositions,
    positions,
    registration
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
        registration={registration}
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
  registration:
  (name, email, phone, positionId) => dispatch(
    registrationThunk(name, email, phone, positionId),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
