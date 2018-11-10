import React from 'react';

const Header = () => (
  <nav className = "navbar navbar-expand-lg bg-dark fixed-top">
    <div className = "container">
      <ul className = "navbar-nav">
        <li className = "nav-item active">
          <a className= "nav-link" href="#">Home</a>
        </li>
        <li className = "nav-item">
          <a className= "nav-link" href="#">About</a>
        </li>
        <li className = "nav-item">
          <a className= "nav-link" href="#">More</a>
        </li>
        <li className = "nav-item">
          <a className= "nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header;
