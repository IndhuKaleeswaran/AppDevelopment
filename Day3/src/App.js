import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Main from './Components/Main/Main';

function App()
{
    return(
        <div className="App">
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/main" element={<Main/>}/>
        
        </Routes>
        </BrowserRouter>
        
   
       

    </div>
   );
}
export default App;