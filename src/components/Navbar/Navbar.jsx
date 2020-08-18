import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header id="navbar-header">
      <h2 className="logo" alt="logo">
        <a href="/">Fresh Off The Hoop</a>
      </h2>
      <nav>
        <ul className="nav__links">
          <li>
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Other">Other</Link>
          </li>
        </ul>
      </nav>
      <a className="cta" href="mailto:djjosehernandez@hotmail.com">
        <button>Contact</button>
      </a>
    </header>
  );
}
