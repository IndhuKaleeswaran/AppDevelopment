import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
function Success() {
    const navigate=useNavigate();
    const backHandler=(e)=>{
        navigate('/RecordedVideos')
    }
  return (
    <>
    <div className="success-page">
      <h2>Successfully Booked</h2>
      <p>Your booking has been confirmed. <br/>
      Thank you for choosing Enlighten Within!</p>
      <button className='suc' onClick={backHandler}>back</button>
    </div>
    </>
  );
}

export default Success;