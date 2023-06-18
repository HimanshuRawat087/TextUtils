import React from "react";

function About(props) {
  let MyStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#0d283d" : "white",
  };

  return (
    <>
      <div className="Container my-3" style={MyStyle}>
        <h1 style={MyStyle}>About Us</h1>
      </div>
      <div className="accordion">
        <div className="accordion-item" style={MyStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={MyStyle}
          >
            <div className="accordion-body">
              <strong>
                Text-Utilization gives a way to analyze your text quicklyand
                efficiently.
              </strong>
              Be it word count, character count and time to read the text.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={MyStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free To Use!
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                Text-Utilization is a free to use text editing tool that
                provides instant character count and word count statistics of
                given text.
              </strong>
              Text-Utilization reports the number of words and character. Thus
              it is suitable for writing text with word / character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={MyStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={MyStyle}>
              <strong>
                This Text-Utilization tool supports different web browsers such
                as Chrome, Microsofe-Bing ,Firefox , Internet-Explorer, Safari,
                Opera.
              </strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
