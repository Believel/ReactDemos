import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Theme from './Theme';
class Content extends Component {
    static propsTypes = {
        themeColor: PropTypes.string
    }
    render() {
        return (
            <div>
                <p style={{ color: this.props.themeColor }}>React.js小书内容</p>
                <Theme {...this.props}/>
            </div>
        );
    }
}
export default Content;