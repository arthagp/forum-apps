import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import InputRegister from '../components/InputRegister';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/login');
  };
  return (
    <section className="register-page">
      <h1>Register Page</h1>
      <InputRegister register={onRegister} />
      <p>
        Already have an account?
        <span><Link to="/login">Login</Link></span>
      </p>
    </section>
  );
}

export default RegisterPage;
