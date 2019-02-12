import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input.js';

class Timeline extends Component {
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

};

const mapStateToProps = state => {

};

export default connect(mapStateToProps)(Timeline);