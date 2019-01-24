import {connect} from 'react-redux';
import Content from '../component/Content';
const mapStateToProps = (state, ownProps) => {
    return {
        themeColor: state.themeColor
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeColor: (color) => {
            dispatch({type: 'CHANGE_COLOR', themeColor: color})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);