import React, { useState } from 'react';
function Feedback() {
  const containerStyle = {
    backgroundSize: 'cover',
    minHeight: '100vh',
    minWidth: '100vw',
  };
  const [feedbackData, setFeedbackData] = useState({
    feedback: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Feedback Data:', feedbackData);

    setFeedbackData({
      feedback: '',
      email: '',
    });
  };

  return (
    <div style={containerStyle}>
    <div className='feed' >
      <h2 className='feed1'>Feedback Form</h2>
      </div>
      <form  className='feed2' onSubmit={handleSubmit}>
        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          name="feedback"
          value={feedbackData.feedback}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>
        <div className='feed3'>
        <label htmlFor="email">Email (optional):</label>
        <input
          type="email"
          id="email"
          name="email"
          value={feedbackData.email}
          onChange={handleChange}
        />
        </div>
        <div >
        <button className='feed4'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Feedback;