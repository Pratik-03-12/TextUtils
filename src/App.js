import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React from "react"
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";



function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

const toggleMode=()=>{
  if (mode==='light') {
    setMode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("Dark Mode has been Enabled","success");
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("Light Mode has been Enabled","succcess");
  }
}

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
          {/* <Route exact path="/" element={<TextForm showalert={showAlert} heading="Enter your text to analyze" mode={mode}/>}/> */}
      {/* </Routes> */}
      <TextForm showalert={showAlert} heading="Enter your text to analyze" mode={mode}/>
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
