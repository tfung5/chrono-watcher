import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

import { Button, Container, Form, FormGroup, Label, Input } from "reactstrap";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    //If user already logged in and navigates to Register page, will be redirected to homepage
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history); // Since we handle the redirect within the action, we do need to pass in this.props.history. withRouter is necessary for this.
    this.props.clearErrors();
  };

  render() {
    const { errors } = this.state;
    const lightRed = "#ff6666";
    const inputFieldWidth = "45%";
    return (
      <Container style={{ marginLeft: "5%" }}>
        <p>
          <Link to="/">Back to home</Link>
        </p>
        <h4>
          <b>Register</b> below
        </h4>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <Form onSubmit={this.onSubmit} style={{ width: "50rem" }}>
          <FormGroup style={{ display: "flex" }}>
            <Label for="name" />
            <Input
              id="name"
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.onChange}
              error={errors.name}
              style={{
                width: inputFieldWidth
              }}
            />
            <span
              style={{
                marginLeft: "1rem",
                color: lightRed
              }}
            >
              {errors.name}
            </span>
          </FormGroup>
          <FormGroup style={{ display: "flex" }}>
            <Label for="email" />
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.onChange}
              error={errors.name}
              style={{
                width: inputFieldWidth
              }}
            />
            <span
              style={{
                marginLeft: "1rem",
                color: lightRed
              }}
            >
              {errors.email}
            </span>
          </FormGroup>
          <FormGroup style={{ display: "flex" }}>
            <Label for="password" />
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onChange}
              error={errors.name}
              style={{
                width: inputFieldWidth
              }}
            />
            <span
              style={{
                marginLeft: "1rem",
                color: lightRed
              }}
            >
              {errors.password}
            </span>
          </FormGroup>
          <FormGroup style={{ display: "flex" }}>
            <Label for="password2" />
            <Input
              id="password2"
              type="password"
              placeholder="Confirm Password"
              value={this.state.password2}
              onChange={this.onChange}
              error={errors.name}
              style={{
                width: inputFieldWidth
              }}
            />
            <span
              style={{
                marginLeft: "1rem",
                color: lightRed
              }}
            >
              {errors.password2}
            </span>
          </FormGroup>

          <Button
            type="submit"
            style={{
              marginTop: "1rem",
              marginBottom: "4rem",
              color: "#000",
              backgroundColor: lightRed,
              width: inputFieldWidth
            }}
            block
          >
            Sign Up
          </Button>
        </Form>
      </Container>
    );
  }
}

Register.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser, clearErrors }
)(withRouter(Register));
