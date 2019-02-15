import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  getActivities,
  addActivity,
  deleteActivity,
  clearErrors
} from "../../actions/activityActions";
import { logoutUser } from "../../actions/authActions";

import moment from "moment";

import {
  Button,
  Container,
  Form,
  FormGroup,
  Label,
  ListGroup,
  ListGroupItem,
  Input
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Landing from "../layout/Landing";
import Dashboard from "../dashboard/Dashboard";

class Activity extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      errors: {}
    };
  }

  componentDidMount() {
    const currentUser = {
      email: this.props.auth.user.email
    };
    this.props.getActivities(currentUser);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newActivity = {
      name: this.state.name,
      email: this.props.auth.user.email
    };
    this.props.addActivity(newActivity);
    this.props.clearErrors();
    this.setState({
      name: ""
    });
  };

  onDeleteClick = id => {
    this.props.deleteActivity(id);
  };

  convertToHHMM = date => {
    var newDate = moment(date).format("hh:mm A");

    return newDate;
  };

  // Displays dashboard only if there is a logged in user
  displayDashboard = () => {
    const { email } = this.props.auth.user;
    if (email) {
      return <Dashboard />;
    } else {
      return <Landing />;
    }
  };

  render() {
    const { activities } = this.props.activity; // Destructuring. Pulling activities from props.activity because on the rootReducer, we have activity: activityReducer. Everything lives under what you call the reducer.
    const { errors } = this.state;

    return (
      <Container>
        {this.displayDashboard()}
        <Form noValidate onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="activity" />
            <Input
              type="text"
              value={this.state.name}
              id="name"
              error={errors.name}
              placeholder="What have you been up to?"
              onChange={this.onChange}
              style={{ marginTop: "-1rem" }}
            />
            <div style={{ marginTop: "1rem", color: "#66ccff" }}>
              {errors.name}
            </div>
            <Button
              style={{
                marginTop: "1rem",
                marginBottom: "4rem",
                color: "#000",
                backgroundColor: "#66ccff"
              }}
              block
            >
              Add Activity
            </Button>
            <ListGroup>
              <TransitionGroup className="activities">
                {activities.map(({ _id, name, date }) => (
                  <CSSTransition key={_id} timeout={500} classNames="fade">
                    <ListGroupItem>
                      <Button
                        className="remove-btn"
                        style={{
                          backgroundColor: "#66ccff"
                        }}
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, _id)}
                      >
                        &times;
                      </Button>
                      <span
                        style={{
                          margin: "0 1rem 0 1rem",
                          color: "#66ccff"
                        }}
                      >
                        {this.convertToHHMM(date)}
                      </span>{" "}
                      <span>{name}</span>
                    </ListGroupItem>
                  </CSSTransition>
                ))}
              </TransitionGroup>
            </ListGroup>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

Activity.propTypes = {
  activity: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  getActivities: PropTypes.func.isRequired,
  addActivity: PropTypes.func.isRequired,
  deleteActivity: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  activity: state.activity,
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getActivities, addActivity, deleteActivity, logoutUser, clearErrors }
)(Activity);
