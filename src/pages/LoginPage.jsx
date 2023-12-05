import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputLogin from '../components/InputLogin';
import { useDispatch } from 'react-redux'
import { asyncSetAuthUser } from '../states/authUser/action'


function LoginPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }))
    
    navigate('/')
  }
  return (
    <section className="login-page">
      <h1>Login Page</h1>
      <InputLogin login={onLogin} />
      <p>
        Don't have an account?
        <span><Link to="/register">Register</Link></span>
      </p>
    </section>
  );
}

export default LoginPage;
