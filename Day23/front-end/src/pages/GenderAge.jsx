import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function GenderAge() {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [lifestyle, setLifestyle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [detailsList, setDetailsList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editDetails, setEditDetails] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the list of details from the backend when the component loads
    fetchDetailsList();
  }, []);

  const fetchDetailsList = async () => {
    try {
      const response = await axios.get('http://localhost:8080/auth/api/details');
      setDetailsList(response.data);
    } catch (error) {
      console.error('Error fetching details:', error);
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleLifestyleChange = (e) => {
    setLifestyle(e.target.value);
  };

  const handleEdit = (details) => {
    setEditMode(true);
    setEditDetails(details);
    setGender(details.gender);
    setAge(details.age);
    setHeight(details.height);
    setWeight(details.weight);
    setLifestyle(details.lifestyle);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditDetails({});
    setGender('');
    setAge('');
    setHeight('');
    setWeight('');
    setLifestyle('');
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!gender || !age || !height || !weight || !lifestyle) {
      setErrorMessage('All fields are required.');
      return;
    }

    setErrorMessage('');

    if (editMode) {
      // If in edit mode, update an existing details entry
      const updatedDetails = {
        id: editDetails.id,
        gender,
        age,
        height,
        weight,
        lifestyle,
      };

      try {
        const response = await axios.put(
          `http://localhost:8080/auth/api/details/${editDetails.id}`,
          updatedDetails
        );

        if (response.status === 200) {
          console.log('Data updated successfully');
          fetchDetailsList();
          handleCancelEdit();
        } else {
          console.error('Failed to update data');
        }
      } catch (error) {
        console.error('Error updating data:', error);
      }
    } else {
      // If not in edit mode, create a new details entry
      const newDetails = {
        gender,
        age,
        height,
        weight,
        lifestyle,
      };

      try {
        const response = await axios.post(
          'http://localhost:8080/auth/api/details',
          newDetails
        );

        if (response.status === 200) {
          console.log('Data saved successfully');
          fetchDetailsList();
          setGender('');
          setAge('');
          setHeight('');
          setWeight('');
          setLifestyle('');
          navigate('/dashboard');
        } else {
          console.error('Failed to save data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/auth/api/details/${id}`
      );

      if (response.status === 204) {
        console.log('Data deleted successfully');
        fetchDetailsList();
      } else {
        console.error('Failed to delete data');
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
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
          <label className="main-label">Height (in cm):</label>
          <input
            type="number"
            value={height}
            onChange={handleHeightChange}
            className="hw-input"
            placeholder="Enter Height"
          />
        </div>

        <div className="form-g">
          <label className="main-label">Weight (in kg):</label>
          <input
            type="number"
            value={weight}
            onChange={handleWeightChange}
            className="hw-input"
            placeholder="Enter Weight"
          />
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

        <div className="button-container">
          {editMode ? (
            <>
              <button type="submit" className="btn-age">
                Update
              </button>
              <button
                type="button"
                className="btn-cancel"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
            </>
          ) : (
            <button type="submit" className="btn-age">
              Submit
            </button>
          )}
        </div>
      </form>

      
    </div>
  );
}

export default GenderAge;
