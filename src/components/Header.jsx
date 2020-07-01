import React from 'react';
import './Header.scss';
import logo from '../assets/logo/logo.svg';
import burgerIcon from '../assets/logo/menu-icon.svg';

export const Header = () => (
  <header className="header-wrapper">
    <div className="logo">
      <img src={logo} alt="company logo" />
    </div>
    <div className="menu">
      <img
        src={burgerIcon}
        alt="icon to open menu"
        className="menu__burgerIcon"
      />
      <ul className="menu__list">
        <li className="menu__item">
          <a className="menu__link" href="#?">About me</a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#?">Relationships</a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#?">Requirements</a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#?">Users</a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#?">Sign Up</a>
        </li>
      </ul>
    </div>
  </header>
);
