import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let UpperCaseText = text.toUpperCase();
    setText(UpperCaseText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="Container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="Enter your Text"
            onChange={handleOnChange}
            rows="15"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
      </div>
      <div className="Container my-5">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * (text.split(" ").length - 1)} minuets to read</p>
        <h2>Preview</h2>
        <p className="border-3">{text}</p>
      </div>
    </>
  );
}
