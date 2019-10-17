import { connect } from "react-redux";

import Header from "../component/Header";
const mapStateToProps = (state, ownProps) => {
    return {
        themeColor: state.commonstate.themeColor
    };
};
export default connect(mapStateToProps)(Header);
