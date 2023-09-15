import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';

import './Login.css';

function Login() {
    const[username,setUserName]=useState('');
    const[password,setPassword]=useState('');
    const[error,seterror]=useState(false);
    const navigate=useNavigate();
    const formHandler=(event)=>
    {
        
    const logindetails={username,password}
    event.preventDefault();
    if(username.length==0)
    {
      alert("Username is required");
    }
    else if(password.length==0)
    {
      alert("Password is required");
    }
    else{
      navigate("/Main")
      navigate("/Signup")
    }
  
          
          
        
      }
  return (
    <div className='body12'>
    <div><img src="https://wallpapers.com/images/hd/yoga-background-n1pow0d7b2df604q.jpg" height="750px" width="1500px" ></img>
    </div>
    <form className='f1' onSubmit={formHandler}>
    <h1>LOGIN</h1><br/>
    USERNAME:<input type="name" value={username} placeholder="USERNAME" onChange={e=>setUserName(e.target.value)}/><br/><br/>
    
    PASSWORD:<input type="password" value={password} placeholder="PASSWORD" onChange={e=>setPassword(e.target.value)}/><br/>
    
    <br/>
    <button class="login" onClick={formHandler} >LOGIN</button>
    <h3>DON'T HAVE AN ACCOUNT?</h3>
    <button class="login" >SIGN UP</button>
    </form>
    </div>
  )
}
export default Login