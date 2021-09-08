import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setAdminAuth, setUserAuth } from '../../../redux/actions/auth';

import './NavLinks.scss';

const NavLinks = props => {
  const isLoggedIn = useSelector(({auth}) => auth.isLoggedIn);
  const isAdmin = useSelector(({auth}) => auth.isAdmin);
  const dispatch = useDispatch();

  const logout = () => dispatch(setUserAuth(false));
  const adminOut = () => dispatch(setAdminAuth(false), setUserAuth(false));

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
      <NavLink to="/portfolio/update">
        Редактировать фото
      </NavLink>
    </li>
    )}
    {!isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
    {isLoggedIn && (
      <li>
        <button onClick={logout}>ВЫЙТИ</button>
      </li>
    )}
    {isAdmin && (
      <li>
        <button onClick={adminOut}>ВЫЙТИ</button>
      </li>
    )}
  </ul>
  );
};

export default NavLinks;