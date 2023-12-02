import React from 'react';

function InputLogin() {
  return (
    <form className="login-input">
      <input type="email" placeholder="Email" required="" value="" />
      <input type="password" placeholder="Password" required="" value="" />
      <button type="submit">Login</button>
    </form>
  );
}

export default InputLogin;
