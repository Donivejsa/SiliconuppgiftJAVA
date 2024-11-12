// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import Logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link id="logo" to="/">
          <img src={Logo} alt="Silicon Logotype" />
        </Link>
        <nav id="main-menu" className="navbar">
          <Link className="nav-link" to="/">
            Features
          </Link>
          <Link className="nav-link" to="/contact">
            Contact us
          </Link>
        </nav>
        <DarkModeToggle />
        <Link id="auth-signin" to="/signin" className="btn-primary">
          <i className="fa-thin fa-user-large"></i>
          <span>Sign in / up</span>
        </Link>
        <button className="btn-mobile">
          <i className="fa-regular fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
