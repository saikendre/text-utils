import React from "react";
import './App.css'
import Header from "./myComponants/Header";
import Utils from "./myComponants/Utils";
import { useState, } from 'react';
import Alert from './myComponants/Alert'
import About from './myComponants/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (messaage, type) => {
    setalert({
      msg: messaage,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode enebled', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode enebled', 'success')
    }
  }
  return (
    <>
    <Router>
      <Header mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
           <Route path='/About' element={<About mode={mode}/>} /> 
           <Route path='/' element={ <Utils heading="enter text here" mode={mode} showAlert={showAlert} />} />
       </Routes>
      </div>
      </Router>
    </>

  );
}

export default App;
