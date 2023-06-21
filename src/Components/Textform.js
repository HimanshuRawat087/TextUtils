import React, { useState } from "react";

export default function Textform(props) {
  var Style = {
    color: props.mode === "dark" ? "#fff" : "black",
    backgroundColor: props.mode === "light" ? "#fff" : "#0d283d",
  };

  const [text, setText] = useState("");

  const handleUpBtn = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert('Converted to uppercase', 'success')
  };

  const handleLoBtn = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert('Converted to lowercase', 'success')
  };

  const handleTitleBtn = () => {
    let newtext = text
      .split(" ")
      .map(function (word, index) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
    setText(newtext);
   props.showAlert('Converted to tilecase', 'success')
  };

  const clearTextBtn = () => {
    let newtext = " ";
    setText(newtext);
    props.showAlert('Text cleared', 'success')
  };

  const copyTextBtn = () => {
    var newtext = document.getElementById("CopyText");
    newtext.select();
    newtext.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(newtext.value);
    props.showAlert('Copied to clipboard', 'success')
  };

  const handleExtraSpaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert('Extra spaces removed', 'success')
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="Container my-3" style={Style}>
        <h1>{props.heading}</h1>

        <textarea
          className="form-control my-2"
          value={text}
          style={Style}
          onChange={handleOnChange}
          rows="5"
        ></textarea>

        <button className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleUpBtn}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleLoBtn}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleTitleBtn}>
          Convert to Title Case
        </button>

        <button className="btn btn-primary mx-1 my-2" disabled={text.length===0} onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="Container" style={Style}>
        <div className="d-flex">
          <h2 className="flex-grow-1">Preview</h2>
          <button
            className="mx-1 btn btn-primary align-self-end my-2"
            disabled={text.length===0} 
            onClick={copyTextBtn}
          >
            Copy
          </button>
          <button
            className="mx-1 btn btn-primary align-self-end my-2"
            disabled={text.length===0} 
            onClick={clearTextBtn}
          >
            Clear
          </button>
        </div>
        <textarea
          className={"border-1 form-control"}
          id="CopyText"
          value={
            text.length > 0
              ? text
              : "Nothing to preview!!"
          }
          style={Style}
          readOnly={true}
          rows="5"
        ></textarea>
      </div>
      <div className="Container my-5" style={Style}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and
          {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minuets to read</p>
      </div>
    </>
  );
}
