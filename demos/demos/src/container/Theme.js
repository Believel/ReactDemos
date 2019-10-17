import { connect } from "react-redux";
import Theme from "../component/Theme";
import { setCommonState } from "../store/actions";
const mapStateToProps = (state, ownProps) => {
    return {
        themeColor: state.commonstate.themeColor
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeColor: color => {
            dispatch(setCommonState(color));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Theme);
