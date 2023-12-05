import React from 'react';
import useInput from '../hooks/useInput'
import PropTypes from 'prop-types';

function InputRegister({ register }) {
  // gunakan controled form name, email
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')

  return (
    <form className="register-input">
      <input type="text" placeholder="Name" value={name} onChange={onNameChange} />
      <input type="email" placeholder="Email" value={email} onChange={onEmailChange} />
      <input type="password" placeholder="Password" value={password} onChange={onPasswordChange} />
      <button type="button" onClick={() => { register({ name, email, password }) }}>Register</button>
    </form>
  );
}

InputRegister.propTypes = {
  register: PropTypes.func.isRequired,
};

export default InputRegister;
