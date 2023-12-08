import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navigation({ authUser, logOut }) {
  const navigate = useNavigate();

  const login = () => {
    navigate('/login');
  };

  return (
    <div className="navigation">
      <h1>
        Forum Apps
        <span className="_dot">.</span>
      </h1>
      <nav>
        <ul>
          <li><Link to="/">Thread</Link></li>
          <li><Link to="/leaderboards">Leader Board</Link></li>
        </ul>
        {authUser !== null ? (
          <button type="button" className="btn-login" onClick={logOut}>
            logout
          </button>
        )
          : (
            <button type="button" className="btn-login" onClick={login}>
              login
            </button>
          )}

      </nav>
    </div>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.objectOf().isRequired,
  logOut: PropTypes.func.isRequired,
};

export default Navigation;
