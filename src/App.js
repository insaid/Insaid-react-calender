import './App.css';
import React from "react";
import Login from './Components/Login';
import Myaccount from './Components/Myaccount';
import Calendar from './Components/Calendar'
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App () {

  return (
    <>
    
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/:id' element={<Login />} />
        <Route path='/Myaccount' element={<Myaccount/>} />
        <Route path='/Calendar' element={<Calendar/>} />
   

      </Routes>
    </>
  );
}

export default App;
