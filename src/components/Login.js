import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`Email: ${email}\nPassword: ${password}`);
    sessionStorage.setItem("email", email)
    navigate("/");
    window.location.reload(true)

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='login-container '>
          <input className='input' placeholder='Email' type="email" id="email" value={email} onChange={handleEmailChange} required />
          <input className='input' placeholder='Password' type="password" id="password" value={password} onChange={handlePasswordChange} required />
          <button type="submit">Login</button>
      </ div>
    </form>
  );
}

export default LoginForm;
