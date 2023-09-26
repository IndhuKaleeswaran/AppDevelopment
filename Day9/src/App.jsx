import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import GenderAge from './pages/GenderAge'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import LiveClasses from './pages/LiveClasses'
import Challenges from './pages/Challenges'
import RecordedVideos from './pages/RecordedVideos'
import YogaPostures from './pages/YogaPostures'
import Payment from './pages/Payment'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import Success from './pages/Success'
import Faq from './pages/Faq'
import Feedback from './pages/Feedback'

function App() {
  return (
   <>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/Login' element={<Login/>}/>
    <Route exact path='/Register' element={<Register/>}/>
    <Route exact path='/GenderAge' element={<GenderAge/>}/>
    <Route exact path='/dashboard'element={<Dashboard/>} />
    <Route exact path='/LiveClasses' element={<LiveClasses/>}/>
    <Route exact path='/RecordedVideos' element={<RecordedVideos/>}/>
    <Route exact path='/Challenges' element={<Challenges/>}/>
    <Route exact path='/YogaPostures' element={<YogaPostures/>}/>
    <Route exact path='/Payment' element={<Payment/>}/>
    <Route exact path='/Success' element={<Success/>}/>
    <Route exact path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
    <Route exact path='/Terms' element={<Terms/>}/>
    <Route exact path='/Feedback' element={<Feedback/>}/>
    <Route exact path='/Faq' element={<Faq/>}/>
 
 
    
   </Routes>
   
   </>
  )
}

export default App