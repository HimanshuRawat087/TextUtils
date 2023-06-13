import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleTitleClick = () => {
    let newtext = text
      .split(" ")
      .map(function (word, index) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
    setText(newtext);
  };

  const clearTextClick = () => {
    let newtext = " ";
    setText(newtext);
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
            placeholder=" Enter your Text"
            value={text}
            onChange={handleOnChange}
            rows="15"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleTitleClick}>
          Convert to Title Case
        </button>

        <button className="btn btn-primary mx-2" onClick={clearTextClick}>
          Clear
        </button>
      </div>

      <div className="Container my-5">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length - 1} words and{" "}
          {text.length - (text.split(" ").length - 1)} characters
        </p>
        <p>{0.008 * (text.split(" ").length - 1)} minuets to read</p>

        <h2>Preview</h2>
        <p className="border-3">{text}</p>
      </div>
    </>
  );
}