import React from 'react';
import './MobileMenu.scss';
import classNames from 'classnames';
import logo from '../../assets/logo/logo.svg';

export const MobileMenu = ({ open, setOpen }) => (
  <div className={classNames('mobile-menu', { show: open })}>
    <div className="mobile-menu__logo">
      <img src={logo} alt="company logo" />
    </div>
    <div
      className="closeMenu"
      role="button"
      tabIndex={0}
      onClick={() => setOpen(!open)}
      onKeyDown={() => setOpen(!open)}
    >
      <div className="closeMenu__inner closeMenu__inner--top" />
      <div className="closeMenu__inner closeMenu__inner--bottom" />
    </div>
    <ul className="mobile-menu__list mobile-menu__list--top">
      <li className="mobile-menu__item">
        <a className="mobile-menu__link" href="#?">About me</a>
      </li>
      <li className="mobile-menu__item">
        <a className="mobile-menu__link" href="#?">Relationships</a>
      </li>
      <li className="mobile-menu__item">
        <a className="mobile-menu__link" href="#?">Users</a>
      </li>
      <li className="mobile-menu__item">
        <a className="mobile-menu__link" href="#?">Sign Up</a>
      </li>
      <li className="mobile-menu__item">
        <a className="mobile-menu__link" href="#?">Terms and Conditions</a>
      </li>
    </ul>
    <ul className="mobile-menu__list mobile-menu__list--middle">
      <li className="mobile-menu__item">
        <a className="mobile-menu__link" href="#?">How it works</a>
      </li>
      <li className="mobile-menu__item">
        <a className="mobile-menu__link" href="#?">Partnership</a>
      </li>
      <li className="mobile-menu__item">
        <a className="mobile-menu__link" href="#?">Help</a>
      </li>
      <li className="mobile-menu__item">
        <a className="mobile-menu__link" href="#?">Leave testimonial</a>
      </li>
      <li className="mobile-menu__item">
        <a className="mobile-menu__link" href="#?">Contact us</a>
      </li>
    </ul>
    <ul className="mobile-menu__list mobile-menu__list--bottom">
      <li className="mobile-menu__item">
        <a className="mobile-menu__link" href="#?">Articles</a>
      </li>
      <li className="mobile-menu__item">
        <a className="mobile-menu__link" href="#?">Our news</a>
      </li>
      <li className="mobile-menu__item">
        <a className="mobile-menu__link" href="#?">Testimonals</a>
      </li>
      <li className="mobile-menu__item">
        <a className="mobile-menu__link" href="#?">Licenses</a>
      </li>
      <li className="mobile-menu__item">
        <a className="mobile-menu__link" href="#?">Privacy Policy</a>
      </li>
    </ul>

  </div>
);
