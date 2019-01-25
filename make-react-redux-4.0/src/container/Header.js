import {connect} from 'react-redux';
import Header from '../component/Header';

const mapStateToProps = (state, ownProps) => {
    return {
        themeColor: state.commonState.themeColor
    }
}


export default connect(mapStateToProps)(Header);