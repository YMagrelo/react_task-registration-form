import React from 'react';
import './App.scss';
import './resets.scss';
import { Header } from './components/Header';
import { About } from './components/About';
import { Requirements } from './components/Requirements';

const App = props => (
  <div className="app-wrapper">
    <Header />
    <About />
    <Requirements />
  </div>
);

export default App;
