import React from 'react';
import Layout from '../components/Layout';
import { Link, Navigate, useNavigate } from "react-router-dom";

function Faq() {
    const navigate=useNavigate();
    const backHandler=(e)=>{
        navigate('/RecordedVideos')
    }
    return (
        <>
            <Layout />
            <div className="faq-container">
                <h1>Frequently Asked Questions</h1>

                <div className="faq-item">
                    <h2>What is Enlighten Within?</h2>
                    <p>Enlighten Within is a yoga training app that provides a wide range of yoga classes and resources for users to enhance their physical and mental well-being.</p>
                </div>

                <div className="faq-item">
                    <h2>How can I get started?</h2>
                    <p>To get started, simply download the app from the App Store or Google Play, create an account, and explore our library of yoga classes and resources.</p>
                </div>

                <div className="faq-item">
                    <h2>Is there a free trial?</h2>
                    <p>Yes, we offer a 7-day free trial for new users. You can access all premium content during the trial period.</p>
                </div>

                <div className="faq-item">
                    <h2>How do I cancel my subscription?</h2>
                    <p>You can cancel your subscription at any time from the app settings. Your access to premium content will continue until the end of the current billing cycle.</p>
                </div>

            </div>
            <button onClick={backHandler} className='back-btn3'>Back</button>
        </>
    );
}

export default Faq;
