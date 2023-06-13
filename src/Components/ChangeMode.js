import React, { useState } from "react";

export default function ChangeMode() {
  const [style1, style2] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [buttonText, setButtonText] = useState("Dark Mode");

  let toggleStyle = () => {
    if (style1.color === "black") {
      style2({
        color: "white",
        backgroundColor: "#263238",//blue-grey-900 color code
      });
      setButtonText("Light Mode");
    } else {
      style2({
        color: "black",
        backgroundColor: "white",
      });
      setButtonText("Dark Mode");
    }
  };

  return (
    <div style={style1}>
      <div class="mb-3" style={style1}>
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          style={style1}
          rows="3"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={toggleStyle}>
        {buttonText}
      </button>
    </div>
  );
}
