import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/">Работы</Link>
        </li>
        <li>
          <Link to="/appoint">Запись</Link>
        </li>
        <li>
          <Link to="/price">Цены</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
