import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from 'axios';
function Feedback() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);
    

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleContactNumberChange = (e) => {
        setContactNumber(e.target.value);
    };

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };
    const navigate=useNavigate();
    
    const handleSubmit = async(e) => {
        e.preventDefault();
       await axios.post("http://localhost:8080/auth/api/feedback",{name,email,contactNumber,feedback});
       navigate("/Feedsuccess");
        setSubmitted(true);
    };

    return (
        <>
            <Layout />
            <div className="feedback-form-container">
                <h1>Feedback Form</h1>
                {submitted ? (
                    <div className="feedback-submitted">
                        Thank you for your feedback!
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label>
                            Your Name:
                            <input
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                required
                            />
                        </label>
                        <label>
                            Your Email:
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </label>
                        <label>
                            Contact Number:
                            <input
                                type="tel"
                                value={contactNumber}
                                onChange={handleContactNumberChange}
                            />
                        </label>
                        <label>
                            Your Feedback:
                            <textarea
                                rows="4"
                                cols="50"
                                value={feedback}
                                onChange={handleFeedbackChange}
                                required
                            />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </div>
        </>
    );
}

export default Feedback;