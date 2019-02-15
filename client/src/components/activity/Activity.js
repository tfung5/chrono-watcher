import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  getActivities,
  addActivity,
  deleteActivity
} from "../../actions/activityActions";
import { logoutUser } from "../../actions/authActions";

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
  state = {
    name: "",
    email: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newActivity = {
      name: this.state.name,
      email: this.props.auth.user.email
    };
    this.props.addActivity(newActivity);
    this.setState({
      name: "",
      errors: {}
    });
  };

  componentDidMount() {
    this.props.getActivities();
  }

  onDeleteClick = id => {
    this.props.deleteActivity(id);
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.setState({
      email: ""
    });
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
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="activity" />
            <Input
              type="text"
              name="name"
              id="activity"
              error={errors.name}
              placeholder="What have you been up to?"
              onChange={this.onChange}
              style={{ marginTop: "-1rem" }}
            />
            <div style={{ marginTop: "1rem", color: "red" }}>{errors.name}</div>
            <Button
              color="dark"
              style={{ marginTop: "1rem", marginBottom: "4rem" }}
              block
            >
              Add Activity
            </Button>
            <ListGroup>
              <TransitionGroup className="activities">
                {activities.map(({ _id, name }) => (
                  <CSSTransition key={_id} timeout={500} classNames="fade">
                    <ListGroupItem>
                      <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, _id)}
                      >
                        &times;
                      </Button>
                      {name}
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
  deleteActivity: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  activity: state.activity,
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getActivities, addActivity, deleteActivity, logoutUser }
)(Activity);
