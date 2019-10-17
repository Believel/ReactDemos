import React, { Component } from "react";
import { connenct } from "./react-redux";
import PropTypes from "prop-types";
class themeColor extends Component {
    static propTypes = {
        themeColor: PropTypes.string,
        handlerChange: PropTypes.func
    };

    constructor() {
        super();
    }
    handlerChange(color) {
        if (this.props.handlerChange) {
            this.props.handlerChange(color);
        }
    }
    render() {
        return (
            <div>
                <button
                    style={{ color: this.props.themeColor }}
                    onClick={this.handlerChange.bind(this, "red")}
                >
                    红色
                </button>
                <button
                    style={{ color: this.props.themeColor }}
                    onClick={this.handlerChange.bind(this, "blue")}
                >
                    蓝色
                </button>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        themeColor: state.themeColor
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handlerChange: color => {
            dispatch({ type: "CHANGE_COLOR", themeColor: color });
        }
    };
};
export default connenct(mapStateToProps, mapDispatchToProps)(themeColor);
