import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";
import { getActivities } from "../../actions/activityActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    const currentUser = {
      email: undefined // This was key in refreshing the list of activities upon logging out.
    };
    this.props.getActivities(currentUser);
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p>
                You are logged into a full-stack MERN app
                <span role="img" aria-label="clap">
                  👏
                </span>
              </p>
              <p>Your email is: </p>
              {user.email}
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                borderColor: "black",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                marginBottom: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  getActivities: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, getActivities }
)(Dashboard);
