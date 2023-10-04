import React, { useState } from 'react';
import Layout from '../components/Layout';

function Feedback() {
    const [feedback, setFeedback] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
