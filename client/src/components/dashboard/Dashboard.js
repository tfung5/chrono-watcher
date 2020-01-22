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
    const lightBlue = "#66ccff";
    const lightRed = "#ff6666";

    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <h4>
              <b>Hey there,</b>{" "}
              <span style={{ color: lightBlue }}>
                {user && user.name && user.name.split(" ")[0]}
              </span>
              <b>!</b>
              <p>You are now logged into Chrono Watcher!</p>
              <p>Your email is: </p>
              <span style={{ color: lightBlue }}>{user.email}</span>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                borderColor: "black",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                marginBottom: "1rem",
                backgroundColor: lightRed
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
