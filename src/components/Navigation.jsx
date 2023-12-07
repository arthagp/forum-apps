import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function Navigation({ authUser, logOut }) {
  const navigate = useNavigate()

  const login = () => {
    navigate('/')
  }

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
          <button className="btn-login" onClick={logOut}>
            logout
          </button>) :
          (<button className="btn-login" onClick={login}>
            login
          </button>)
        }

      </nav>
    </div>
  );
}

export default Navigation;
