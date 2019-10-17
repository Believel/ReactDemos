import React, { Component } from "react";

class Theme extends Component {
    handleChange(color) {
        if (this.props.changeColor) {
            this.props.changeColor(color);
        }
    }
    render() {
        return (
            <div>
                <button
                    onClick={this.handleChange.bind(this, "red")}
                    style={{ color: this.props.themeColor }}
                >
                    red
                </button>
                <button
                    onClick={this.handleChange.bind(this, "blue")}
                    style={{ color: this.props.themeColor }}
                >
                    blue
                </button>
            </div>
        );
    }
}

export default Theme;
