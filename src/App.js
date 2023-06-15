import logo from "./logo.svg";
import "./App.css";
import React, {useState} from 'react';
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import ChangeMode from "./Components/ChangeMode";

function App() {

  const [mode , setMode] = useState('light');
  const [BtnText,setText] =useState('Dark Mode');
  
  const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.background='#0d283d'
      setText('Light Mode')
    }
    else{
      setMode('light')
      document.body.style.background='white'
      setText('Dark Mode')
    }
  }

  return (
    <>
      <Navbar title="TextUtils" btnText={BtnText} mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <Textform
          heading="Enter Your Text Below"
          mode={mode}
          toggleMode={toggleMode}
        />
      </div>
    </>
  );
}

export default App;
