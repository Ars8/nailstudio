import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>Галерея</NavLink>
    </li>
    <li>
      <NavLink to="/appoint">Запись</NavLink>
    </li>
    <li>
      <NavLink to="/price">Цены</NavLink>
    </li>
  </ul>
};

export default NavLinks;