import React from 'react';
import './App.scss';
import './resets.scss';
import { connect } from 'react-redux';
import { Header } from './components/Header/Header';
import { About } from './components/About';
import { Requirements } from './components/Requirements';
import { Persons } from './components/Persons/Persons';
import { getUsersThunk } from './redux/reducer';

const App = (props) => {
  const {users, getUsers} = props;

  return (
    <div className="app-wrapper">
      <Header />
      <About />
      <Requirements />
      <Persons
        users={users}
        getUsers={getUsers}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  getUsers: page => dispatch(getUsersThunk(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
