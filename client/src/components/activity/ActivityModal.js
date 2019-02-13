import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { addActivity } from "../../actions/activityActions";
import uuid from "uuid";

class ActivityModal extends Component {
  state = {
    modal: false,
    name: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newActivity = {
      id: uuid(),
      name: this.state.name
    };

    // Add activity using addActivity action
    this.props.addActivity(newActivity);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Activity
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Activity List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Activity</Label>
                <Input
                  type="text"
                  name="name"
                  id="activity"
                  placeholder="Add activity"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Activity
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

ActivityModal.propTypes = {
  activities: PropTypes.object.isRequired,
  addActivity: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  activity: state.activity
});

export default connect(
  mapStateToProps,
  { addActivity }
)(ActivityModal);
