import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import GenderAge from './pages/GenderAge'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import LiveClasses from './pages/LiveClasses'
import Challenges from './pages/Challenges'
import RecordedVideos from './pages/RecordedVideos'

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
    <Route exact path='/ContactUs' element={<ContactUs/>}/>
    <Route exact path='/home' element={<Home/>}/>
 
 
    
   </Routes>
   
   </>
  )
}

export default App