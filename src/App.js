import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container">
        <Textform heading="Enter Your Text Below" buttonType="Convert to Uppercase"/>
      </div>
    </>
  );
}

export default App;
