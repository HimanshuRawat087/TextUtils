// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [BtnText, setText] = useState("Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#0d283d";
      setText("Light Mode");
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      setText("Dark Mode");
      showAlert("Light mode is enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          btnText={BtnText}
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Textform heading="Enter Your Text Below" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>}/>
              <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
