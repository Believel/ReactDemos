import {connect} from 'react-redux';
import Content from '../component/Content';
import * as actions from '../store/actions';
const mapStateToProps = (state, ownProps) => {
    return {
        themeColor: state.commonState.themeColor
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeColor: (color) => {
            dispatch(actions.setCommonState(color))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);