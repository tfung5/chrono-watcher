import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

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
    //If user already logged in and navigates to Register page, will be redirected to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
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
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <Container>
        <FormGroup>
          <Label for="name" />
          <Input
            onChange={this.onChange}
            value={this.state.name}
            error={errors.name}
            id="name"
            type="text"
            className={classnames("", {
              invalid: errors.name
            })}
            placeholder="Name"
            style={{
              width: "20rem"
            }}
          />

          <Input
            onChange={this.onChange}
            value={this.state.name}
            error={errors.name}
            id="name"
            type="text"
            className={classnames("", {
              invalid: errors.name
            })}
          />
          <Input
            onChange={this.onChange}
            value={this.state.name}
            error={errors.name}
            id="name"
            type="text"
            className={classnames("", {
              invalid: errors.name
            })}
          />
          <Input
            onChange={this.onChange}
            value={this.state.name}
            error={errors.name}
            id="name"
            type="text"
            className={classnames("", {
              invalid: errors.name
            })}
          />
        </FormGroup>
        <div style={{ marginTop: "4em" }}>
          <div>
            <Link to="/">
              <i>keyboard_backspace</i> Back to home
            </Link>
            <div style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p>
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                <label htmlFor="name">Name</label>
                <span>{errors.name}</span>
              </div>
              <div>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <label htmlFor="email">Email</label>
                <span>{errors.email}</span>
              </div>
              <div>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <label htmlFor="password">Password</label>
                <span>{errors.password}</span>
              </div>
              <div>
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span>{errors.password2}</span>
              </div>
              <div style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
