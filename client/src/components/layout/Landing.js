import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            marginTop: "4rem",
            marginBottom: "-3rem"
          }}
        >
          <h2>Welcome!</h2>
        </div>
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
              letterSpacing: "1.5px",
              backgroundColor: "#ff6666"
            }}
            className="btn"
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
              letterSpacing: "1.5px",
              backgroundColor: "#66ccff"
            }}
            className="btn"
          >
            Log In
          </Link>
        </div>
      </div>
    );
  }
}
export default Landing;
