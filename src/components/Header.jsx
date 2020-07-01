import React, { useState } from 'react';
import './Header.scss';
import classNames from 'classnames';
import logo from '../assets/logo/logo.svg';
import burgerIcon from '../assets/logo/menu-icon.svg';
import { MobileMenu } from './MobileMenu';

export const Header = (props) => {
  const [open, setOpen] = useState(true);

  return (
    <header className={classNames('header-wrapper', { show: open })}>
      <div className="logo">
        <img src={logo} alt="company logo" />
      </div>
      <MobileMenu
        open={open}
        setOpen={setOpen}
      />
      <div className="menu">
        <div
          role="button"
          tabIndex={0}
          className={classNames('menu__burgerIcon', { show: open })}
          onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}
        >
          <img
            src={burgerIcon}
            alt="icon to open menu"
          />
        </div>
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
};
