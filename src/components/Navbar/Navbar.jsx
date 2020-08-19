import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

export default function Navbar() {
  return (
    <header id="navbar-header">
      <h2 className="logo" alt="logo">
        <a href="/">Fresh Off The Hoop</a>
      </h2>
      <nav>
        <ul className="nav__links">
          <li>
            <ReactGA.OutboundLink
              eventLabel="Etsy_shop"
              to="https://www.etsy.com/ca/shop/FreshOffTheHoopCA"
              target="_blank"
              rel="noopener noreferrer"
              class="fa fa-etsy"
            >
              Shop
            </ReactGA.OutboundLink>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Other">Other</Link>
          </li>
        </ul>
      </nav>
      <a className="cta" href="mailto:placeholder">
        <button>Contact</button>
      </a>
    </header>
  );
}
