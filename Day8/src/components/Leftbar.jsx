import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';

import InsightsIcon from '@mui/icons-material/Insights';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import LogoutIcon from '@mui/icons-material/Logout';

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
    navigate('/YogaPostures')
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
                        <InsightsIcon className='left-bar-icons'/>
                        Dashboard
                    </button>
                    <button className='left-bar-button nav-btn' onClick={challengeHandler}>
                    <FormatQuoteIcon className='left-bar-icons'/>
                        Motivational Quotes
                    </button>

                    <button className='left-bar-button nav-btn' onClick={videosHandler}>
                    <OndemandVideoIcon className='left-bar-icons'/><br/>
                        Yoga Videos
                    </button>
                    <button className='left-bar-button nav-btn' onClick={classHandler}>
                    <HistoryToggleOffIcon className='left-bar-icons'/><br/>
                        Live Classes
                    </button>
                    <button className='left-bar-button-logout nav-btn' onClick={logoutHandler}>
                    <LogoutIcon className='left-bar-icons'/><br/>
                        Logout
                    </button>

                </div>
            </div>
        </>
    )
}

export default Leftbar