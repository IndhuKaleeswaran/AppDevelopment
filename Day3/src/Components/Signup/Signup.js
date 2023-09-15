import React, { useState } from 'react'
import  Link  from '@mui/material/Link';


import './Signup.css';

export default function Signup() {
    const[firstname,setFirstName]=useState('');
    const[lastname,setLastName]=useState('');
    const[mobileNum,setMobileNum]=useState('');
    const[email,setEmail]=useState('');
    const[username,setUserName]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPwd,setConfirmPassword]=useState('');
    const[error,seterror]=useState(false);


    const formHandler=(event)=>
    {
        event.preventDefault();
        if(firstname.length===0 || lastname.length===0 || mobileNum.length<10 || mobileNum.length>10 || email.length===0 || username.length===0 || password.length!==0 || password!==confirmPwd)
        {
          seterror(true);
        }
        if(firstname && lastname && mobileNum && email && username && password && confirmPwd)
        {

          const loginobj={
            fname:firstname,
            lname:lastname,
            mob:mobileNum,
            mail:email,
            name:username,
            pwd:password,
            cpwd:confirmPwd
          }
        }
      }
  return (
    <div className='body4'>
    <div><img src="https://wallpapers.com/images/hd/yoga-background-n1pow0d7b2df604q.jpg" height="750px" width="1500px" ></img></div>
    <h4><form className="form1" onSubmit={formHandler}>
    <br/>
    <h3>CREATE ACCOUNT</h3><br/>
    FIRST NAME: <input type="text" value={firstname} placeholder="FIRST NAME" onChange={e=>setFirstName(e.target.value)}/><br/>
    <div>
    {error && firstname.length===0?
      <label style={{color:'red'}}>Firstname is required</label>:""} 
    </div><br/>
    LAST NAME:<input type="text" value={lastname} placeholder="LAST NAME" onChange={e=>setLastName(e.target.value)}/><br/>
    <div>
    {error && lastname.length===0?
      <label style={{color:'red'}}>Lastname is required</label>:""} 
    </div><br/>
    MOBILE NUMBER:<input type="number" value={mobileNum} placeholder="MOBILE NUMBER" onChange={e=>setMobileNum(e.target.value)}/><br/>
    <div>
    {error && mobileNum.length<10?
      <label style={{color:'red'}}>Invalid Mobile Number</label>:""} 
    </div>
    <div>
    {error && mobileNum.length>10?
      <label style={{color:'red'}}>Invalid Mobile Number</label>:""} 
    </div><br/>
    E-MAIL ID:<input type="text" value={email} placeholder="E-MAIL ID" onChange={e=>setEmail(e.target.value)}/><br/>
    <div>
    {error && email.length===0?
      <label style={{color:'red'}}>E-mail ID is required</label>:""} 
    </div><br/>
    USERNAME:<input type="text" value={username} placeholder="USERNAME" onChange={e=>setUserName(e.target.value)}/><br/>
    <div>
    {error && username.length===0?
      <label style={{color:'red'}}>Username is required</label>:""} 
    </div><br/>
    PASSWORD:<input type="password" value={password} placeholder="PASSWORD" onChange={e=>setPassword(e.target.value)}/><br/>
    <div>
    {error && password.length===0?
      <label style={{color:'red'}}>Password is required</label>:""}
    </div><br/>
    CONFIRM PASSWORD:<input type="password" value={confirmPwd} placeholder="CONFIRM PASSWORD" onChange={e=>setConfirmPassword(e.target.value)}/><br/>
    <div>
    {error && password!==confirmPwd?
      <label style={{color:'red'}}>Password Confirmation Failed</label>:""}
    </div>
    <div>
    <br/><br/>
        <button class="sign" >SUBMIT</button><br/><br/><br/><br/>
        </div>
        <br/><br/><br/><br/>
    </form></h4>
    </div>
  )
}