import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Управление портом</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Список кораблей
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Добавить судно
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
