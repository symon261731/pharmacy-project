import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/authorization/logout');
    if (response.ok) {
      setUser(null);
      navigate('/');
    }
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Apteka App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!user && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/home">Главная</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/registration">Регистрация</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/authorization">Авторизация</NavLink>
                </li>
              </>
              )}
              {user && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/home">Главная</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile"> Личный кабинет</NavLink>
                </li>
                <li className="nav-item">
                  <a onClick={logoutHandler} className="nav-link" href="/logout">Выход</a>
                </li>
              </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  };
}
