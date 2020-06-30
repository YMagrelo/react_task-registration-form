import React from 'react';
import './App.scss';
import './resets.scss';
import { Header } from './components/Header';
import { About } from './components/About';

const App = props => (
  <div className="app-wrapper">
    <Header />
    <About />
  </div>
);

export default App;
