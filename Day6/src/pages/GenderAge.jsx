import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GenderAge() {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [lifestyle, setLifestyle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleLifestyleChange = (e) => {
    setLifestyle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!gender || !age || !lifestyle) {
      console.error('Please select gender, age, and lifestyle.');
      setErrorMessage('All fields are required.');
      return;
    }

    setErrorMessage('');

    navigate('/dashboard');
  };

  return (
    <div className="gender-form">
      <h1 className="gender-head">Choose the details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-g">
          <label className="main-label">Gender:</label>
          <div>
            <label className="sub-label">
              <input
                type="radio"
                value="Male"
                checked={gender === 'Male'}
                onChange={handleGenderChange}
              />
              Male
            </label>
            <label className="sub-label">
              <input
                type="radio"
                value="Female"
                checked={gender === 'Female'}
                onChange={handleGenderChange}
              />
              Female
            </label>
            <label className="sub-label">
              <input
                type="radio"
                value="Other"
                checked={gender === 'Other'}
                onChange={handleGenderChange}
              />
              Others
            </label>
          </div>
        </div>

        <div className="form-g">
          <label className="main-label">Age:</label>
          <select value={age} onChange={handleAgeChange} className="age-select">
            <option value="">Select Age</option>
            <option value="Below 18">Below 18</option>
            <option value="18-30">18-30</option>
            <option value="31-45">31-45</option>
            <option value="46-60">46-60</option>
            <option value="60+">60+</option>
          </select>
        </div>

        <div className="form-g">
          <label className="main-label">Lifestyle:</label>
          <select
            value={lifestyle}
            onChange={handleLifestyleChange}
            className="age-select"
          >
            <option value="">Select Lifestyle</option>
            <option value="Sedentary">Sedentary</option>
            <option value="Less Active">Less Active</option>
            <option value="Highly Active">Highly Active</option>
          </select>
        </div>

        {/* Error message */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button type="submit" className="btn-age">
          Submit
        </button>
      </form>
    </div>
  );
}

export default GenderAge;
