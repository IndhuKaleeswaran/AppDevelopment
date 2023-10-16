import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function Feedsuccess() {
    const navigate=useNavigate();
    const backHandler=(e)=>{
        navigate('/Dashboard')
    }
  return (
    <>
    <div className="success-page">
    <CheckCircleIcon/>
      <h2>Feedback Sent Successfully</h2>
      <p>Your feedback has been submitted successfully. <br/><br/>
      Thank you for your feedback!</p>
      <button className='suc-btn' onClick={backHandler}>Back</button>
    </div>
    </>
  );
}

export default Feedsuccess;