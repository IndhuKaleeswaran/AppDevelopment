import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import axios from 'axios';


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (formdata.username.length >= 6 && formdata.password.length >= 6) {
        const response = await axios.post("http://localhost:8080/auth/authenticate", formdata);
        localStorage.setItem("auth",response.data.token)
        console.log(response.data.token)
        dispatch(login(formdata.username));
        navigate('/GenderAge');
      } else {
        setError(true);
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
      alert("Incorrect Username and Password.");
    }
  };

  
  return (
    <div className='body' >
      <div className='layout'>
        <div className='rectangle'></div>
        <div className='login'>
          <b>LOGIN</b>
        </div>
        <br />
        <div className='form'>
          <form onSubmit={submitHandler}>
            Username: <input type="text" id="username" value={formdata.username} placeholder="Username" onChange={handleChange} /><br />
            {error && formdata.username.length < 6 && <label style={{ color: 'Red' }}>Username must be at least 6 characters</label>}
            <br />
            Password: <input type="password" id="password" value={formdata.password} placeholder="Password" onChange={handleChange} /><br />
            {error && formdata.password.length < 6 && <label style={{ color: 'Red' }}>Password must be at least 6 characters</label>}
            <br />
            <h5><button type="submit" className='but'>LOGIN</button></h5><br /><br />
            <h5><center>Don't have an account?</center></h5><br />
            <Link to="/Register"><h5><button type="submit" className='but'>SIGNUP</button></h5></Link><br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;