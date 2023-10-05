import React from 'react';
import Layout from '../components/Layout';
import { useNavigate, Link } from 'react-router-dom'


function Terms() {
    const navigate=useNavigate();

    const backHandler=(e)=>{
        navigate('/RecordedVideos')
    }
    return (
        <>
            <Layout />
            <div className="terms-and-conditions-container">
                <h1>Terms and Conditions</h1>
                <ol>
                    
                    <li>
                        You are responsible for your health and well-being while practicing yoga using this app.
                    </li>
                    <li>
                        We are not liable for any injuries or health issues that may arise from using the app.
                    </li>
                    <li>
                        You may not distribute or share our app's content without permission.
                    </li>
                    <li>
                        All content provided in this app is for informational and educational purposes only.
                    </li>
                    <li>
                        We reserve the right to modify or discontinue any part of the app at any time.
                    </li>
                    <li>
                        You agree not to engage in any unlawful or prohibited activities while using the app.
                    </li>
                    <li>
                        Your use of this app is subject to our Privacy Policy.
                    </li>
                    <li>
                        We do not guarantee the accuracy or completeness of the information provided in the app.
                    </li>
                    <li>
                        You may be required to create an account and provide accurate information for access to certain features.
                    </li>
                    <li>
                        You are responsible for maintaining the confidentiality of your account credentials.
                    </li>
                    <li>
                        We reserve the right to suspend or terminate your account if you violate these terms.
                    </li>
                    <li>
                        You may not reverse engineer, decompile, or disassemble the app.
                    </li>
                    <li>
                        The app may use cookies or similar technologies to enhance your experience.
                    </li>
                    <li>
                        We may send you notifications and updates related to the app.
                    </li>
                </ol>
                {/* Add more points as needed */}
                <h2>Changes to Terms and Conditions</h2>
                <p>
                    We reserve the right to modify these terms and conditions at any time. Please review them periodically.
                </p>
                <p>
                    For any questions or concerns about these terms and conditions, please contact us at info@enlightenwithin.com.
                </p>
                </div>
                <button className='back-btn1' onClick={backHandler}>Back</button>
        </>
    );
}

export default Terms;
