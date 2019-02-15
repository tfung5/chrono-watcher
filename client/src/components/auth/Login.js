import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

import { Button, Container, Form, FormGroup, Label, Input } from "reactstrap";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    //If user already logged in and navigates to Login page, will be redirected to homepage
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/"); // push user to home when they login
    }
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
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData); // Since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter. withRouter is unnecessary for this.
    this.props.clearErrors();
  };

  render() {
    const { errors } = this.state;
    const lightBlue = "#66ccff";
    const inputFieldWidth = "45%";
    return (
      <Container style={{ marginLeft: "10rem" }}>
        <p>
          <Link to="/">Back to home</Link>
        </p>
        <h4>
          <b>Login</b> below
        </h4>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>

        <Form onSubmit={this.onSubmit} style={{ width: "50rem" }}>
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
                color: lightBlue
              }}
            >
              {errors.email}
              {errors.emailnotfound}
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
                color: lightBlue
              }}
            >
              {errors.password}
              {errors.passwordincorrect}
            </span>
          </FormGroup>

          <Button
            type="submit"
            style={{
              marginTop: "1rem",
              marginBottom: "4rem",
              color: "#000",
              backgroundColor: lightBlue,
              width: inputFieldWidth
            }}
            block
          >
            Log In
          </Button>
        </Form>
      </Container>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser, clearErrors }
)(Login);
