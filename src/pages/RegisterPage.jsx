import React from 'react';
import { Link } from 'react-router-dom';
import InputRegister from '../components/InputRegister';

function RegisterPage() {
  return (
    <section className="register-page">
      <h1>Register Page</h1>
      <InputRegister />
      <p>
        Already have an account?
        <span><Link to="/login">Login</Link></span>
      </p>
    </section>
  );
}

export default RegisterPage;
