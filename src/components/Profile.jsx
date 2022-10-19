import React from 'react';

export default function Profile({ user, filterCards }) {
  return (
    <div className="container">
      <div className="profile">
        <h5 className="card-title">Профиль</h5>
        <ul>
          <li>
            <p>
              Имя:
              {' '}
              {user.name || null}
            </p>
          </li>
          <li>
            <p>
              Email:
              {' '}
              {user.email || null}
            </p>
          </li>
          <li>
            <p>
              Город:
              {' '}
              {null}
            </p>
          </li>
          <li>
            <p>
              Телефон:
              {' '}
              {user.phone || null}
            </p>
          </li>
        </ul>
        <a href="#" className="card-link">Изменить профиль</a>
      </div>
      <div className="cards">
        {filterCards}
      </div>
    </div>
  );
}
