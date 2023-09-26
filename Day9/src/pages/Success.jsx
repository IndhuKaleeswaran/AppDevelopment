import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function Success() {
    const navigate=useNavigate();
    const backHandler=(e)=>{
        navigate('/RecordedVideos')
    }
  return (
    <>
    <div className="success-page">
    <CheckCircleIcon/>
      <h2>Successfully Booked</h2>
      <p>Your booking has been confirmed. <br/>
      Thank you for choosing Enlighten Within!</p>
      <button className='suc-btn' onClick={backHandler}>Back</button>
    </div>
    </>
  );
}

export default Success;