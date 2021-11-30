// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import { Aksh } from "./components/Navbar";

function App() {
  const [alert1, setalert] = useState(null);

  const showalert = (message, type, color) => {
    setalert({
      msg: message,
      type: type,
      clr: color
    })


  }
  const [mode1, setmode] = useState("light"); //Whether dark mode is enable or not
  // const [font1, setfont] = useState("dark"); //Whether dark mode is enable or not
  const togglemode1 = () => {
    if (mode1 === "dark") {
      setmode("light");
      document.body.style.backgroundColor = 'white'
      // setfont("dark");
      showalert('Light mode has been Enabled', 'Success', 'success')
    } else {
      setmode("dark");
      document.body.style.backgroundColor = '#040d4a';
      showalert('Dark mode has been Enabled', 'Success', 'info')
      // setfont("light");
    }
  };
  return (
    <>
      {/*
  <Navbar title='aksh' aboutText={meshv1()} /> */}
      <Navbar title="TextUtils" aboutText="About" mode={mode1} togglemode={togglemode1} />
      <Alert alert={alert1} />
      {/*
  <Aksh aksh="hi" /> */}
      {/*
  <Aksh aksh="bye" /> */}
      {/*
  <Navbar title="Textutils aksh" aboutText="About textutils" /> */}
      {/* <h1>This is me</h1> */}
      <div className="container my-3">
        <Textform  showalert1 ={showalert} heading="Enter the Text to Anaylize Below" mode={mode1} />
        {/* <About /> */}
      </div>
      {/* <img src={logo} className="aksh" alt="" /> */}
    </>
  );
}

export default App;
