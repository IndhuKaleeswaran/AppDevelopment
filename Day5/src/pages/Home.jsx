import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1 className='home-head'>Enlighten Within</h1>

      <div className="btn1">
        <Link to="/login" className="login-button">
          Login
        </Link>
              /
        <Link to="/register" className="register-button">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Home;
