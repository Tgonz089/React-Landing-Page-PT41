import React from "react";
import PropType from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const colorChangeTitle = {
  color: "white",
  paddingRight: "53rem",
  paddingLeft: "20rem",
};
const colorChangeWhite = {
  color: "white",
};
const colorChangeGrey = {
  color: "grey",
};

//create your first component
const Home = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={colorChangeTitle}>
          Start Bootstrap
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                style={colorChangeWhite}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={colorChangeGrey}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" v style={colorChangeGrey}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={colorChangeGrey}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Home;
