import React from 'react';
import { Link } from 'react-router-dom';
import InputLogin from '../components/InputLogin';

function LoginPage() {
  return (
    <section className="login-page">
      <h1>Login Page</h1>
      <InputLogin />
      <p>
        Don't have an account?
        <span><Link to="/register">Register</Link></span>
      </p>
    </section>
  );
}

export default LoginPage;
