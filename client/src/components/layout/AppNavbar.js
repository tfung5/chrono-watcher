import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar
          expand="sm"
          className="mb-5"
          style={{
            backgroundColor: "#66ccff"
          }}
        >
          <Container>
            <NavbarBrand>
              <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
                Chrono Watcher
              </Link>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle}>Menu</NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    href="https://www.github.com/tfung5"
                    target="_blank"
                    style={{
                      textDecoration: "none",
                      color: "#000"
                    }}
                  >
                    GitHub
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default connect()(AppNavbar);
