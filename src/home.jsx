import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <p>这是home</p>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string.isRequired
}

export default Home;