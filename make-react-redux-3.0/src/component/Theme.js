import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Theme extends Component {
    static propsTypes = {
        themeColor: PropTypes.string
    }
    handleSwitchColor (color) {
        if (this.props.changeColor) {
            this.props.changeColor(color)
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.handleSwitchColor.bind(this, 'red')}  style={{ color: this.props.themeColor }}>Red</button>
                <button onClick={this.handleSwitchColor.bind(this, 'blue')} style={{ color: this.props.themeColor }}>Blue</button>
            </div>
        );
    }
}
export default Theme;