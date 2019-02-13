import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Activity extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            id: "",
            errors: {}
        }
    }

    render() {
        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                Activity

                <Input />
            </div>
        );
    }
}

Activity.propTypes = {
    activities: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    activities: state.activities
});

export default connect(mapStateToProps)(Activity);