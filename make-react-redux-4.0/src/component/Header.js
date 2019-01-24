import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Header extends Component {
    static propsTypes = {
        themeColor: PropTypes.string
    }
   
    render() {
        return (
            <div>
                <h1 style={{color: this.props.themeColor}}>React小书</h1>
            </div>
        );
    }
}

export default Header;