import React, { Component } from "react";
import { connenct } from "./react-redux";
import PropTypes from "prop-types";
class header extends Component {
    static propTypes = {
        themeColor: PropTypes.object
    };
    constructor() {
        super();
    }
    render() {
        return <div style={{ color: this.props.themeColor }}>Study study</div>;
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        themeColor: state.themeColor
    };
};
export default connenct(mapStateToProps)(header);
