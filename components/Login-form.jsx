import React, { useState } from 'react';
import '../styleSheets/Login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    
    console.log('UserName : ', username);
    console.log('Password : ', password);
    if (username === 'mob' && password === '1234') {
        setIsLoggedIn(true);
      }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="UserName"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
