import React from "react";

export default function Textform(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="ENTER TEXT HERE!"
          rows="15"
        ></textarea>
      </div>
      <button className="btn btn-primary">
        {props.buttonType}
      </button>
    </div>
  );
}
