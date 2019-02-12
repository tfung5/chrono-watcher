import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        <Link to="/" style={ {fontFamily: "monospace"} } className="col s5 brand-logo center black-text">
                            <i className="material-icons">code</i>
                            MERN
                        </Link>
                        <Link to="/register"
                        style={{
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px"
                        }}
                        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                        >
                        Register
                        </Link>
                        <Link to="/login"
                        style={{
                            marginRight: "2rem",
                            width: "150px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px"
                        }}
                        className="btn btn-large waves-effect white hoverable black-text"
                        >
                        Log In
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;