import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Input extends Component {
    render() {
        return (
            <div>
                Input
            </div>
        );
    }
}

Input.propTypes = {

};

const mapStateToProps = state => {

};

export default connect(mapStateToProps)(Input);