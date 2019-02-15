import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            margin: "5rem"
          }}
        >
          <Link
            to="/register"
            style={{
              width: "150px",
              borderRadius: "3px",
              borderColor: "black",
              letterSpacing: "1.5px"
            }}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >
            Register
          </Link>
          <Link
            to="/login"
            style={{
              marginLeft: "2rem",
              width: "150px",
              borderRadius: "3px",
              borderColor: "black",
              letterSpacing: "1.5px"
            }}
            className="btn btn-large waves-effect white hoverable black-text"
          >
            Log In
          </Link>
        </div>
      </div>
    );
  }
}
export default Landing;
