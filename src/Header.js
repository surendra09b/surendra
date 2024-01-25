// Header.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './Assets/logo.jpg'

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/"><img src={logo} alt='' width='100px' height='60px'/></Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            &#9776;
          </button>
          {isDropdownVisible && (
            <div className="dropdown-content">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
