import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input.js';

class Timeline extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            id: "",
            errors: {}
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                Timeline

                <Input />
            </div>
        );
    }
}

Timeline.propTypes = {
    activities: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    activities: state.activities
});

export default connect(mapStateToProps)(Timeline);