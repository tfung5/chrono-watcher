import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getActivities, deleteActivity } from "../../actions/activityActions";

import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Activity extends Component {
  componentDidMount() {
    this.props.getActivities();
  }

  onDeleteClick = id => {
    this.props.deleteActivity(id);
  };

  render() {
    const { activities } = this.props.activity; // Destructuring. Pulling activities from props.activity because on the rootReducer, we have activity: activityReducer. Everything lives under what you call the reducer.
    return (
      <Container>
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
      </Container>
    );
  }
}

Activity.propTypes = {
  activity: PropTypes.object.isRequired,
  getActivities: PropTypes.func.isRequired,
  deleteActivity: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  activity: state.activity
});

export default connect(
  mapStateToProps,
  { getActivities, deleteActivity }
)(Activity);
