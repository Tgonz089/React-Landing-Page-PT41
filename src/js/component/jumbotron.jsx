import React from "react";
import PropType from "prop-types";

const mySuperStyles = {
  fontSize: "16px",
  background: "rgb(235, 233, 233)",
  border: "none",
  padding: "40px",
};

const Jumbotron = (props) => {
  return (
    <div className="jumbotron" style={mySuperStyles}>
      <h1 className="display-4">{props.title}</h1>
      <p>{props.paragraph}</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          {props.buttonLabel}
        </a>
      </p>
    </div>
  );
};
export default Jumbotron;
