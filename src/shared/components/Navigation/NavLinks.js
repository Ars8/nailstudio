import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './NavLinks.scss';

const NavLinks = props => {
  const isLoggedIn = useSelector(({auth}) => auth.isLoggedIn);
  const isAdmin = useSelector(({auth}) => auth.isAdmin);

  return (
  <ul className="nav-links">
    <li>
      <NavLink to="/" exact>
        Галерея
      </NavLink>
    </li>
    <li>
      <NavLink to="/appoint">
        Запись
      </NavLink>
    </li>
    <li>
      <NavLink to="/price">
        Цены
      </NavLink>
    </li>
    {isLoggedIn && (
      <li>
      <NavLink to="/employeeSchedule">
        Расписание мастера
      </NavLink>
    </li>
    )}
    {isLoggedIn && isAdmin && (
      <li>
      <NavLink to="/portfolio/new">
        Добавить фото
      </NavLink>
    </li>
    )}
    {isLoggedIn && isAdmin && (
      <li>
      <NavLink to="/portfolio/new">
        Редактировать фото
      </NavLink>
    </li>
    )}
    {isLoggedIn && isAdmin && (
      <li>
      <NavLink to="/portfolio/:fotoId">
        Редактировать фото
      </NavLink>
    </li>
    )}
  </ul>
  );
};

export default NavLinks;