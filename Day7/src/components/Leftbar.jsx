import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';

function Leftbar() {

    const dispatch= useDispatch();
    const navigate=useNavigate();

const dashboardHandler = ()=>{
    navigate('/Dashboard')
}
const videosHandler = ()=>{
    navigate('/RecordedVideos')
}
const classHandler = () =>{
    navigate('/LiveClasses')
}
const contactHandler = () =>{
    navigate('/ContactUs')
}
const challengeHandler = () =>{
    navigate('/Challenges')
}
const logoutHandler = () =>{
    dispatch(logout())
    navigate('/')
}
    return (
        <>
            <div className='left-bar'>
                <div className='left-bar-container'>
                    
                    <button className='left-bar-button nav-btn' onClick={dashboardHandler}>
                        Dashboard
                    </button>
                    <button className='left-bar-button nav-btn' onClick={challengeHandler}>
                        Challenges
                    </button>
                    <button className='left-bar-button nav-btn' onClick={videosHandler}>
                        Yoga Videos
                    </button>
                    <button className='left-bar-button nav-btn' onClick={classHandler}>
                        Live Classes
                    </button>
                    <button className='left-bar-button nav-btn' onClick={contactHandler}>
                        Contact Us
                    </button>
                    <button className='left-bar-button-logout nav-btn' onClick={logoutHandler}>
                        Logout
                    </button>

                </div>
            </div>
        </>
    )
}

export default Leftbar