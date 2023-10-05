import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const logindetails = {
      username: formdata.username,
      password: formdata.password
    };

    axios.post("http://localhost:8080/loginpost", logindetails)
      .then(response => {
        // Assuming the response contains a token upon successful login
        const token = response.data.token;

        // Dispatch your login action with username and token
        dispatch(login({ username: formdata.username, token }));

        // Navigate to the Home page
        navigate('/GenderAge');
      })
      .catch(error => {
        // Handle errors here
        console.error('Error occurred during login:', error);
      });
  };

  return (
    <div className='auth-container'>
      <div className='auth-wrapper'>
        <form className='auth-form app-x-shadow' onSubmit={submitHandler}>
          <h1 className='auth-heading'>Login Form</h1>
          <input type="text" name="username" id="username" value={formdata.username} onChange={handleChange} placeholder='username' className='auth-field' required />
          <input type="password" name="password" id="password" value={formdata.password} onChange={handleChange} placeholder='password' className='auth-field' required />
          <button type='submit' className='auth-btn app-x-shadow'> Login </button>
        </form>
          <Link to='/Register' className='auth-links'>Register</Link>
      </div>
    </div>
  );
}

export default Login;
