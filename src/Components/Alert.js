import React from "react";

function Alert(props) {
  return (
    <div style={{height:'25px'}}>
      {props.alert && (
        <div className="d-flex justify-content-center">
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{props.alert.type}</strong>: {props.alert.msg}
          </div>
        </div>
      )}
    </div>
  );
}

export default Alert;
