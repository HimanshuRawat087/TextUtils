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
    newtext.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(newtext.value);
  };

  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="Container my-3">
        <div className="d-flex">
            <h1  className="flex-grow-1">{props.heading}</h1>

            <button className="mx-1 btn btn-primary align-self-end" onClick={clearTextBtn}>
              Clear
            </button>

            <button className="mx-1 btn btn-primary align-self-end " onClick={copyTextBtn}>
              Copy
            </button>
        </div>

        <textarea
          className="form-control my-2"
          placeholder="Enter your Text"
          value={text}
          onChange={handleOnChange}
          rows="5"
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

        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="Container my-3">
        <h2>Preview</h2>
        <textarea
          className="border-3 form-control"
          value={text}
          id="CopyText"
          placeholder="Enter TEXT Above to Preview Here"
          readOnly={true}
          rows="5"
        ></textarea>
      </div>
      <div className="Container my-5">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length - 1} words and{" "}
          {text.length - (text.split(" ").length - 1)} characters
        </p>
        <p>{0.008 * (text.split(" ").length - 1)} minuets to read</p>
      </div>
    </>
  );
}
