import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpBtn = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleLoBtn = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleTitleBtn = () => {
    let newtext = text
      .split(" ")
      .map(function (word, index) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
    setText(newtext);
  };

  const clearTextBtn = () => {
    let newtext = " ";
    setText(newtext);
  };

  const copyTextBtn = () => {
    var newtext = document.getElementById("CopyText");
    newtext.select();
    newtext.setSelectionRange(0,9999);
    navigator.clipboard.writeText(newtext.value)
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
     <h1>{props.heading}</h1>
      <div className="d-flex flex-row-reverse mb-2">
        <div className="p-1">
          <button className="btn btn-primary" onClick={clearTextBtn}>
            Clear
          </button>
        </div>
        <div className="p-1">
          <button className="btn btn-primary" onClick={copyTextBtn}>
            Copy
          </button>
        </div>
      </div>
      <div className="Container">
        <textarea
          className="form-control"
          id="CopyText"
          placeholder="Enter your Text"
          value={text}
          onChange={handleOnChange}
          rows="15"
        ></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpBtn}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleLoBtn}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleTitleBtn}>
          Convert to Title Case
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
