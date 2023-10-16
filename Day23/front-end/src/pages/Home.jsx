import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1 className='home-head'>Enlighten Within</h1>
      <div className='desc'>~ A Yoga Training App</div>
      <div className="btn1">
        <Link to="/login">
          Login
        </Link>
              /
        <Link to="/register">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Home;
