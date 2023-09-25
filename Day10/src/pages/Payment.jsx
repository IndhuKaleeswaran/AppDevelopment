import React from 'react'
import Layout from '../components/Layout'
import { Link, Navigate, useNavigate } from "react-router-dom";

import { Button } from '@mui/material'



function Payment() {
    const [value, setValue] = React.useState();
    const navigate=useNavigate();
    const payHandler=(e)=>{
        navigate('/Success');
    }
    const handleChange = (event) => {
   
      setValue(event.target.value);
   
    };
  
    return (
        <>

            <Layout />
            <div className='main-wrapper'>
                <div className='apply'>
                </div>
                <div className='bill-container'>
   <div className='billform'>
   <div className='billhead'>
   <h1>Payment</h1>
   </div>
  
   <br/>
   <label>
   SESSION TITLE : <input type  ="name" placeholder="Session Name" className='invoice'/>
   </label>
   <label>
   PAYMENT TYPE : 
   <select value={value} onChange={handleChange}>
   <option value="">Select Payment Type</option>
   <option value="cash">cash</option>
   <option value="card">card</option>
   </select>
   </label>
   <br/>
   <label>AMOUNT : <input type="number" placeholder="amount" className='invoice'/>
   </label>
   <br/>
   <br/>
   <Button className='list1' onClick={payHandler}>
   <div className='button1'>
   PAY
   </div>
   <br/>
   
   </Button>
  
   </div>
   </div>
   </div>
            
        </>
    )
}

export default Payment